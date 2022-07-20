// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { Fragment, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Button, LinearProgress, Box } from "@mui/material";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import withStyles from "@mui/styles/withStyles";
import { containerForHeader } from "../../../Common/FormComponents/common/styleLibrary";
import InputBoxWrapper from "../../../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import RadioGroupSelector from "../../../Common/FormComponents/RadioGroupSelector/RadioGroupSelector";
import { k8sScalarUnitsExcluding } from "../../../../../common/utils";
import { AppState, useAppDispatch } from "../../../../../store";
import { useSelector } from "react-redux";
import FormSwitchWrapper from "../../../Common/FormComponents/FormSwitchWrapper/FormSwitchWrapper";
import PageHeader from "../../../Common/PageHeader/PageHeader";
import BackLink from "../../../../../common/BackLink";
import { BucketsIcon, InfoIcon } from "../../../../../icons";

import PageLayout from "../../../Common/Layout/PageLayout";
import InputUnitMenu from "../../../Common/FormComponents/InputUnitMenu/InputUnitMenu";
import FormLayout from "../../../Common/FormLayout";
import HelpBox from "../../../../../common/HelpBox";
import SectionTitle from "../../../Common/SectionTitle";
import { selDistSet, selSiteRep } from "../../../../../systemSlice";
import {
  resetForm,
  setEnableObjectLocking,
  setQuota,
  setQuotaSize,
  setQuotaUnit,
  setRetention,
  setRetentionMode,
  setRetentionUnit,
  setRetentionValidity,
  setVersioning,
} from "./addBucketsSlice";
import { addBucketAsync } from "./addBucketThunks";
import AddBucketName from "./AddBucketName";
import { useNavigate } from "react-router-dom";

const styles = (theme: Theme) =>
  createStyles({
    buttonContainer: {
      marginTop: 24,
      textAlign: "right",
      "& .MuiButton-root": {
        marginLeft: 8,
      },
    },
    error: {
      color: "#b53b4b",
      border: "1px solid #b53b4b",
      padding: 8,
      borderRadius: 3,
    },
    alertVersioning: {
      border: "#E2E2E2 1px solid",
      backgroundColor: "#FBFAFA",
      borderRadius: 3,
      display: "flex",
      alignItems: "center",
      padding: "10px",
      color: "#767676",
      "& > .min-icon ": {
        width: 20,
        height: 20,
        marginRight: 10,
      },
    },
    title: {
      marginBottom: 8,
    },
    headTitle: {
      fontWeight: "bold",
      fontSize: 16,
      paddingLeft: 8,
    },
    h6title: {
      fontWeight: "bold",
      color: "#000000",
      fontSize: 20,
    },
    ...containerForHeader(theme.spacing(4)),
  });

interface IsetProps {
  classes: any;
}

const AddBucket = ({ classes }: IsetProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const versioningEnabled = useSelector(
    (state: AppState) => state.addBucket.versioningEnabled
  );
  const lockingEnabled = useSelector(
    (state: AppState) => state.addBucket.lockingEnabled
  );
  const quotaEnabled = useSelector(
    (state: AppState) => state.addBucket.quotaEnabled
  );
  const quotaSize = useSelector((state: AppState) => state.addBucket.quotaSize);
  const quotaUnit = useSelector((state: AppState) => state.addBucket.quotaUnit);
  const retentionEnabled = useSelector(
    (state: AppState) => state.addBucket.retentionEnabled
  );
  const retentionMode = useSelector(
    (state: AppState) => state.addBucket.retentionMode
  );
  const retentionUnit = useSelector(
    (state: AppState) => state.addBucket.retentionUnit
  );
  const retentionValidity = useSelector(
    (state: AppState) => state.addBucket.retentionValidity
  );
  const addLoading = useSelector((state: AppState) => state.addBucket.loading);
  const invalidFields = useSelector(
    (state: AppState) => state.addBucket.invalidFields
  );
  const lockingFieldDisabled = useSelector(
    (state: AppState) => state.addBucket.lockingFieldDisabled
  );
  const distributedSetup = useSelector(selDistSet);
  const siteReplicationInfo = useSelector(selSiteRep);
  const navigateTo = useSelector(
    (state: AppState) => state.addBucket.navigateTo
  );

  const resForm = () => {
    dispatch(resetForm());
  };

  useEffect(() => {
    if (navigateTo !== "") {
      const goTo = `${navigateTo}`;
      dispatch(resetForm());
      navigate(goTo);
    }
  }, [navigateTo, navigate, dispatch]);

  return (
    <Fragment>
      <PageHeader label={<BackLink to={"/buckets"} label={"区块"} />} />
      <PageLayout>
        <FormLayout
          title={"创建区块"}
          icon={<BucketsIcon />}
          helpbox={
            <HelpBox
              iconComponent={<BucketsIcon />}
              title={"区块"}
              help={
                <Fragment>
                  {/* MinIO uses buckets to organize objects. A bucket is similar to
                  a folder or directory in a filesystem, where each bucket can
                  hold an arbitrary number of objects. */}
                  MinIO使用区块来组织对象。区块类似于文件系统中的文件夹或目录，其中每个存储桶可以
                  容纳任意数量的对象。
                  <br />
                  <br />
                  <b>版本控制</b> 允许保留同一版本的多个版本，同一键下的对象.
                  <br />
                  <br />
                  <b>对象锁</b> 可防止删除对象。需要支持保留和合法持有。
                   只能是在区块创建时启用。
                  <br />
                  <br />
                  <b>区块命名规则</b>
                  <Box
                    sx={{
                      display: "flex",
                      flexFlow: "column",
                      fontSize: "14px",
                      flex: "2",
                      "& .step-number": {
                        color: "#ffffff",
                        height: "25px",
                        width: "25px",
                        background: "#081C42",
                        marginRight: "10px",
                        textAlign: "center",
                        fontWeight: 600,
                        borderRadius: "50%",
                      },

                      "& .step-row": {
                        fontSize: "14px",
                        display: "flex",
                        marginTop: "15px",
                        marginBottom: "2px",

                        "&.step-text": {
                          fontWeight: 400,
                        },
                        "&:before": {
                          content: "' '",
                          height: "7px",
                          width: "7px",
                          backgroundColor: "#2781B0",
                          marginRight: "10px",
                          marginTop: "7px",
                          flexShrink: 0,
                        },
                      },
                    }}
                  >
                    <Box className="step-row">
                      <div className="step-text">
                      名称必须介于3（最小）和63（最大）之间字符长
                      </div>
                    </Box>
                    <Box className="step-row">
                      <div className="step-text">
                      名称只能由小写字母组成，数字、点（.），和连字符（-）
                      </div>
                    </Box>
                    <Box className="step-row">
                      <div className="step-text">
                      名称不能包含两个相邻的句点
                      </div>
                    </Box>
                    <Box className="step-row">
                      <div className="step-text">
                      名称不得格式化为IP地址（对于例如，192.168.5.4）
                      </div>
                    </Box>
                    <Box className="step-row">
                      <div className="step-text">
                      名称不能以前缀xn--开头
                      </div>
                    </Box>
                    <Box className="step-row">
                      <div className="step-text">
                      名称不能以后缀-s3alias结尾。这后缀是为接入点别名保留的
                      </div>
                    </Box>
                    <Box className="step-row">
                      <div className="step-text">
                        名称在分区内必须是唯一的
                      </div>
                    </Box>
                  </Box>
                </Fragment>
              }
            />
          }
        >
          <form
            noValidate
            autoComplete="off"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              dispatch(addBucketAsync());
            }}
          >
            <Grid container marginTop={1} spacing={2}>
              <Grid item xs={12}>
                <AddBucketName />
              </Grid>
              <Grid item xs={12}>
                <SectionTitle>特征</SectionTitle>
                {!distributedSetup && (
                  <Fragment>
                    <div className={classes.error}>
                      这些功能在单磁盘设置中不可用
                      <br />
                      请部署服务器 {" "}
                      <a
                        href="https://docs.min.io/minio/baremetal/installation/deploy-minio-distributed.html?ref=con"
                        target="_blank"
                        rel="noreferrer"
                      >
                        分布式模式
                      </a>{" "}
                      使用这些功能
                    </div>
                    <br />
                    <br />
                  </Fragment>
                )}
              </Grid>

              <Grid item xs={12}>
                {siteReplicationInfo.enabled && (
                  <Fragment>
                    <br />
                    <div className={classes.alertVersioning}>
                      <InfoIcon /> 版本控制设置不能更改,
                      已为此站点启用群集复制
                    </div>
                    <br />
                  </Fragment>
                )}
                <FormSwitchWrapper
                  value="versioned"
                  id="versioned"
                  name="versioned"
                  checked={versioningEnabled}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch(setVersioning(event.target.checked));
                  }}
                  label={"版本控制"}
                  disabled={
                    !distributedSetup ||
                    lockingEnabled ||
                    siteReplicationInfo.enabled
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormSwitchWrapper
                  value="locking"
                  id="locking"
                  name="locking"
                  disabled={lockingFieldDisabled || !distributedSetup}
                  checked={lockingEnabled}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch(setEnableObjectLocking(event.target.checked));
                    if (event.target.checked && !siteReplicationInfo.enabled) {
                      dispatch(setVersioning(true));
                    }
                  }}
                  label={"对象锁"}
                />
              </Grid>

              <Grid item xs={12}>
                <FormSwitchWrapper
                  value="bucket_quota"
                  id="bucket_quota"
                  name="bucket_quota"
                  checked={quotaEnabled}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch(setQuota(event.target.checked));
                  }}
                  label={"配额"}
                  disabled={!distributedSetup}
                />
              </Grid>
              {quotaEnabled && distributedSetup && (
                <React.Fragment>
                  <Grid item xs={12}>
                    <InputBoxWrapper
                      type="string"
                      id="quota_size"
                      name="quota_size"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        dispatch(setQuotaSize(e.target.value));
                      }}
                      label="容量"
                      value={quotaSize}
                      required
                      min="1"
                      overlayObject={
                        <InputUnitMenu
                          id={"quota_unit"}
                          onUnitChange={(newValue) => {
                            dispatch(setQuotaUnit(newValue));
                          }}
                          unitSelected={quotaUnit}
                          unitsList={k8sScalarUnitsExcluding(["Ki"])}
                          disabled={false}
                        />
                      }
                      error={
                        invalidFields.includes("quotaSize")
                          ? "Please enter a valid quota"
                          : ""
                      }
                    />
                  </Grid>
                </React.Fragment>
              )}
              {versioningEnabled && distributedSetup && (
                <Grid item xs={12}>
                  <FormSwitchWrapper
                    value="bucket_retention"
                    id="bucket_retention"
                    name="bucket_retention"
                    checked={retentionEnabled}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      dispatch(setRetention(event.target.checked));
                    }}
                    label={"保持"}
                  />
                </Grid>
              )}
              {retentionEnabled && distributedSetup && (
                <React.Fragment>
                  <Grid item xs={12}>
                    <RadioGroupSelector
                      currentSelection={retentionMode}
                      id="retention_mode"
                      name="retention_mode"
                      label="模式"
                      onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
                        dispatch(setRetentionMode(e.target.value as string));
                      }}
                      selectorOptions={[
                        { value: "compliance", label: "遵从" },
                        { value: "governance", label: "统治" },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputBoxWrapper
                      type="number"
                      id="retention_validity"
                      name="retention_validity"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        dispatch(setRetentionValidity(e.target.valueAsNumber));
                      }}
                      label="有效性"
                      value={String(retentionValidity)}
                      required
                      overlayObject={
                        <InputUnitMenu
                          id={"retention_unit"}
                          onUnitChange={(newValue) => {
                            dispatch(setRetentionUnit(newValue));
                          }}
                          unitSelected={retentionUnit}
                          unitsList={[
                            { value: "days", label: "天" },
                            { value: "years", label: "年" },
                          ]}
                          disabled={false}
                        />
                      }
                    />
                  </Grid>
                </React.Fragment>
              )}
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button
                type="button"
                variant={"outlined"}
                className={classes.clearButton}
                onClick={resForm}
              >
                清除
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={addLoading || invalidFields.length > 0}
              >
                创建区块
              </Button>
            </Grid>
            {addLoading && (
              <Grid item xs={12}>
                <LinearProgress />
              </Grid>
            )}
          </form>
        </FormLayout>
      </PageLayout>
    </Fragment>
  );
};

export default withStyles(styles)(AddBucket);
