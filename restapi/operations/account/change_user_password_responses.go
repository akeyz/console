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

package account

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/taozhuo-dev/console/models"
)

// ChangeUserPasswordCreatedCode is the HTTP code returned for type ChangeUserPasswordCreated
const ChangeUserPasswordCreatedCode int = 201

/*ChangeUserPasswordCreated Password successfully changed.

swagger:response changeUserPasswordCreated
*/
type ChangeUserPasswordCreated struct {
}

// NewChangeUserPasswordCreated creates ChangeUserPasswordCreated with default headers values
func NewChangeUserPasswordCreated() *ChangeUserPasswordCreated {

	return &ChangeUserPasswordCreated{}
}

// WriteResponse to the client
func (o *ChangeUserPasswordCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(201)
}

/*ChangeUserPasswordDefault Generic error response.

swagger:response changeUserPasswordDefault
*/
type ChangeUserPasswordDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.Error `json:"body,omitempty"`
}

// NewChangeUserPasswordDefault creates ChangeUserPasswordDefault with default headers values
func NewChangeUserPasswordDefault(code int) *ChangeUserPasswordDefault {
	if code <= 0 {
		code = 500
	}

	return &ChangeUserPasswordDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the change user password default response
func (o *ChangeUserPasswordDefault) WithStatusCode(code int) *ChangeUserPasswordDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the change user password default response
func (o *ChangeUserPasswordDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the change user password default response
func (o *ChangeUserPasswordDefault) WithPayload(payload *models.Error) *ChangeUserPasswordDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the change user password default response
func (o *ChangeUserPasswordDefault) SetPayload(payload *models.Error) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ChangeUserPasswordDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
