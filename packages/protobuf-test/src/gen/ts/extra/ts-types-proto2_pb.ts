// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.2.2 with parameter "target=ts,import_extension=js"
// @generated from file extra/ts-types-proto2.proto (package spec, syntax proto2)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file extra/ts-types-proto2.proto.
 */
export const file_extra_ts_types_proto2: GenFile = /*@__PURE__*/
  fileDesc("ChtleHRyYS90cy10eXBlcy1wcm90bzIucHJvdG8SBHNwZWMiNAoHVHNUeXBlQRILCgNzdHIYASABKAkSHAoFY2hpbGQYAiABKAsyDS5zcGVjLlRzVHlwZUEiNAoHVHNUeXBlQhILCgNzdHIYASABKAkSHAoFY2hpbGQYAiABKAsyDS5zcGVjLlRzVHlwZUI");

/**
 * @generated from message spec.TsTypeA
 */
export type TsTypeA = Message<"spec.TsTypeA"> & {
  /**
   * @generated from field: optional string str = 1;
   */
  str: string;

  /**
   * @generated from field: optional spec.TsTypeA child = 2;
   */
  child?: TsTypeA;
};

/**
 * Describes the message spec.TsTypeA.
 * Use `create(TsTypeASchema)` to create a new message.
 */
export const TsTypeASchema: GenMessage<TsTypeA> = /*@__PURE__*/
  messageDesc(file_extra_ts_types_proto2, 0);

/**
 * @generated from message spec.TsTypeB
 */
export type TsTypeB = Message<"spec.TsTypeB"> & {
  /**
   * @generated from field: optional string str = 1;
   */
  str: string;

  /**
   * @generated from field: optional spec.TsTypeB child = 2;
   */
  child?: TsTypeB;
};

/**
 * Describes the message spec.TsTypeB.
 * Use `create(TsTypeBSchema)` to create a new message.
 */
export const TsTypeBSchema: GenMessage<TsTypeB> = /*@__PURE__*/
  messageDesc(file_extra_ts_types_proto2, 1);

