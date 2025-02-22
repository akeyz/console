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

package object

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/taozhuo-dev/console/models"
)

// PostBucketsBucketNameObjectsUploadOKCode is the HTTP code returned for type PostBucketsBucketNameObjectsUploadOK
const PostBucketsBucketNameObjectsUploadOKCode int = 200

/*PostBucketsBucketNameObjectsUploadOK A successful response.

swagger:response postBucketsBucketNameObjectsUploadOK
*/
type PostBucketsBucketNameObjectsUploadOK struct {
}

// NewPostBucketsBucketNameObjectsUploadOK creates PostBucketsBucketNameObjectsUploadOK with default headers values
func NewPostBucketsBucketNameObjectsUploadOK() *PostBucketsBucketNameObjectsUploadOK {

	return &PostBucketsBucketNameObjectsUploadOK{}
}

// WriteResponse to the client
func (o *PostBucketsBucketNameObjectsUploadOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(200)
}

/*PostBucketsBucketNameObjectsUploadDefault Generic error response.

swagger:response postBucketsBucketNameObjectsUploadDefault
*/
type PostBucketsBucketNameObjectsUploadDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewPostBucketsBucketNameObjectsUploadDefault creates PostBucketsBucketNameObjectsUploadDefault with default headers values
func NewPostBucketsBucketNameObjectsUploadDefault(code int) *PostBucketsBucketNameObjectsUploadDefault {
	if code <= 0 {
		code = 500
	}

	return &PostBucketsBucketNameObjectsUploadDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the post buckets bucket name objects upload default response
func (o *PostBucketsBucketNameObjectsUploadDefault) WithStatusCode(code int) *PostBucketsBucketNameObjectsUploadDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the post buckets bucket name objects upload default response
func (o *PostBucketsBucketNameObjectsUploadDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the post buckets bucket name objects upload default response
func (o *PostBucketsBucketNameObjectsUploadDefault) WithPayload(payload *models.Error) *PostBucketsBucketNameObjectsUploadDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the post buckets bucket name objects upload default response
func (o *PostBucketsBucketNameObjectsUploadDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *PostBucketsBucketNameObjectsUploadDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
