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

import * as constants from "./constants";
import { Selector } from "testcafe";
import { IAM_PAGES } from "../../src/common/SecureComponent/permissions";
//----------------------------------------------------
// Buttons
//----------------------------------------------------
export const loginSubmitButton = Selector("form button");
export const closeAlertButton = Selector(
  'button[class*="ModalError-closeButton"]'
);

export const uploadButton = Selector("span")
  .withAttribute("aria-label", "上传文件")
  .child("button:enabled");
export const createPolicyButton =
  Selector("button:enabled").withText("创建策略");
export const saveButton = Selector("button:enabled").withText("保存");
export const deleteButton = Selector("button:enabled").withExactText("删除");
export const deleteIconButton = Selector("button:enabled").withAttribute(
  "aria-label",
  "Delete"
);
export const deleteIconButtonAlt = Selector("button:enabled").withAttribute(
  "aria-label",
  "delete"
);
export const configureBucketButton = Selector(
  'span[class*="MuiIconButton-root"]'
).withAttribute("aria-label", "配置区块");
export const addNotifTargetButton = Selector("button:enabled").withText(
  "Add Notification Target"
);
export const createTierButton =
  Selector("button:enabled").withText("创建层");
export const createBucketButton =
  Selector("button:enabled").withText("创建区块");
export const deleteBucketButton =
  Selector("button:enabled").withText("删除区块");
export const createUserButton =
  Selector("button:enabled").withText("创建用户");
export const createGroupButton =
  Selector("button:enabled").withText("创建群组");
export const deleteGroupIconButton = Selector("span")
  .withAttribute("aria-label", "Delete Group")
  .find("button:enabled");
export const editMembersButton =
  Selector("button:enabled").withText("修改成员");
export const addAccessRuleButton =
  Selector("button:enabled").withText("添加访问规则");
export const startDiagnosticButton =
  Selector("button:enabled").withText("启动诊断");
export const startNewDiagnosticButton = Selector("#start-new-diagnostic");
export const downloadButton = Selector("button:enabled").withText("下载");
export const startButton = Selector("button:enabled").withText("开始");
export const stopButton = Selector("button:enabled").withText("停止");
export const assignPoliciesButton =
  Selector("button:enabled").withText("分配策略");
//----------------------------------------------------
// Links
//----------------------------------------------------
export const logsLink = Selector("a").withText("日志");
export const watchLink = Selector("a").withText("查看");
export const traceLink = Selector("a").withText("跟踪");
export const healLink = Selector("a").withText("健康");
export const diagnosticsLink = Selector("a").withText("诊断");

//----------------------------------------------------
// Switches
//----------------------------------------------------
export const switchInput = Selector(".MuiSwitch-input");

//----------------------------------------------------
// Inputs
//----------------------------------------------------
export const bucketNameInput = Selector("#bucket-name");
export const bucketsPrefixInput = Selector("#prefix");
export const bucketsAccessInput = Selector(
  'input[class*="MuiSelect-nativeInput"]'
);
export const bucketsAccessReadOnlyInput = Selector(
  'li[class*="MuiMenuItem-root"]'
).withText("只读");
export const bucketsAccessWriteOnlyInput = Selector(
  'li[class*="MuiMenuItem-root"]'
).withText("只写");
export const bucketsAccessReadWriteInput = Selector(
  'li[class*="MuiMenuItem-root"]'
).withText("读写");
export const uploadInput = Selector("input").withAttribute("type", "file");
export const createPolicyName = Selector("#policy-name");
export const createPolicyTextfield = Selector(".w-tc-editor-text");
export const usersAccessKeyInput = Selector("#accesskey-input");
export const usersSecretKeyInput = Selector("#standard-multiline-static");
export const groupNameInput = Selector("#group-name");
export const searchResourceInput = Selector("#search-resource");
export const filterUserInput = searchResourceInput.withAttribute(
  "placeholder",
  "Filter Users"
);
export const groupUserCheckbox = Selector(".ReactVirtualized__Table__row span")
  .withText(constants.TEST_USER_NAME)
  .parent(1)
  .find(".ReactVirtualized__Grid input")
  .withAttribute("type", "checkbox");

//----------------------------------------------------
// Dropdowns and options
//----------------------------------------------------
export const bucketDropdownOptionFor = (modifier) => {
  return Selector("li").withAttribute(
    "data-value",
    `${constants.TEST_BUCKET_NAME}-${modifier}`
  );
};

//----------------------------------------------------
// Text
//----------------------------------------------------
export const groupStatusText = Selector("#group-status");

//----------------------------------------------------
// Tables, table headers and content
//----------------------------------------------------
export const table = Selector(".ReactVirtualized__Table");
export const bucketsTableDisabled = Selector("#object-list-wrapper")
  .find(".MuiPaper-root")
  .withText("当前路径为空，请尝试上载新文件");
export const createGroupUserTable = Selector(
  ".MuiDialog-container .ReactVirtualized__Table"
);

//----------------------------------------------------
// Bucket page vertical tabs
//----------------------------------------------------
export const bucketAccessRulesTab =
  Selector(".MuiTab-root").withText("访问规则");

//----------------------------------------------------
// Settings window
//----------------------------------------------------
export const settingsWindow = Selector("#settings-container");

//----------------------------------------------------
// Settings page vertical tabs
//----------------------------------------------------
export const settingsRegionTab = Selector(".MuiTab-root").withAttribute(
  "href",
  "/settings/configurations/region"
);
export const settingsCacheTab = Selector(".MuiTab-root").withAttribute(
  "href",
  "/settings/configurations/cache"
);
export const settingsCompressionTab = Selector(".MuiTab-root").withAttribute(
  "href",
  "/settings/configurations/compression"
);
export const settingsApiTab = Selector(".MuiTab-root").withAttribute(
  "href",
  "/settings/configurations/api"
);
export const settingsHealTab = Selector(".MuiTab-root").withAttribute(
  "href",
  "/settings/configurations/heal"
);
export const settingsScannerTab = Selector(".MuiTab-root").withAttribute(
  "href",
  "/settings/configurations/scanner"
);
export const settingsEtcdTab = Selector(".MuiTab-root").withAttribute(
  "href",
  "/settings/configurations/etcd"
);
export const settingsOpenIdTab = Selector(".MuiTab-root").withAttribute(
  "href",
  "/settings/configurations/identity_openid"
);
export const settingsLdapTab = Selector(".MuiTab-root").withAttribute(
  "href",
  "/settings/configurations/identity_ldap"
);
export const settingsLoggerWebhookTab = Selector(".MuiTab-root").withAttribute(
  "href",
  "/settings/configurations/logger_webhook"
);
export const settingsAuditWebhookTab = Selector(".MuiTab-root").withAttribute(
  "href",
  "/settings/configurations/audit_webhook"
);

//----------------------------------------------------
// Log window
//----------------------------------------------------
export const logWindow = Selector('[data-test-id="logs-list-container"]');
//Node selector
export const nodeSelector = Selector('[data-test-id="node-selector"]');
//----------------------------------------------------
// User Details
//----------------------------------------------------
export const userPolicies = Selector(".MuiTab-root").withText("政策");
