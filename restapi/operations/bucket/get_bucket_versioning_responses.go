// Code generated by go-swagger; DO NOT EDIT.

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
//

package bucket

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/taozhuo-dev/console/models"
)

// GetBucketVersioningOKCode is the HTTP code returned for type GetBucketVersioningOK
const GetBucketVersioningOKCode int = 200

/*GetBucketVersioningOK A successful response.

swagger:response getBucketVersioningOK
*/
type GetBucketVersioningOK struct {

	/*
	  In: Body
	*/
	Payload *models.BucketVersioningResponse `json:"body,omitempty"`
}

// NewGetBucketVersioningOK creates GetBucketVersioningOK with default headers values
func NewGetBucketVersioningOK() *GetBucketVersioningOK {

	return &GetBucketVersioningOK{}
}

// WithPayload adds the payload to the get bucket versioning o k response
func (o *GetBucketVersioningOK) WithPayload(payload *models.BucketVersioningResponse) *GetBucketVersioningOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get bucket versioning o k response
func (o *GetBucketVersioningOK) SetPayload(payload *models.BucketVersioningResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetBucketVersioningOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

/*GetBucketVersioningDefault Generic error response.

swagger:response getBucketVersioningDefault
*/
type GetBucketVersioningDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewGetBucketVersioningDefault creates GetBucketVersioningDefault with default headers values
func NewGetBucketVersioningDefault(code int) *GetBucketVersioningDefault {
	if code <= 0 {
		code = 500
	}

	return &GetBucketVersioningDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the get bucket versioning default response
func (o *GetBucketVersioningDefault) WithStatusCode(code int) *GetBucketVersioningDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the get bucket versioning default response
func (o *GetBucketVersioningDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the get bucket versioning default response
func (o *GetBucketVersioningDefault) WithPayload(payload *models.Error) *GetBucketVersioningDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the get bucket versioning default response
func (o *GetBucketVersioningDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *GetBucketVersioningDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
