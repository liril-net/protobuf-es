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

// @formatter:off

// Comment before syntax.

// @generated by protoc-gen-es v2.2.2 with parameter "target=js+dts,import_extension=js"
// @generated from file extra/comments.proto (package spec, syntax proto3)
/* eslint-disable */

// Comment after syntax.

// Comment before package.

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file extra/comments.proto.
 */
export const file_extra_comments = /*@__PURE__*/
  fileDesc("ChRleHRyYS9jb21tZW50cy5wcm90bxIEc3BlYyKiAQoTTWVzc2FnZVdpdGhDb21tZW50cxILCgNmb28YASABKAkSDwoFdmFsdWUYAiABKAVIABIPCgVlcnJvchgDIAEoCUgAEicKH3RoaXNfZmllbGRfaGFzX2FuX2VtcHR5X2NvbW1lbnQYBCABKAkSKQoYdGhpc19maWVsZF9pc19kZXByZWNhdGVkGAUgASgJQgIYAVIDc2RmQggKBnJlc3VsdCIZChdFbXB0eU1lc3NhZ2VXaXRoQ29tbWVudCJpChRHb29nbGVDb21tZW50RXhhbXBsZRILCgNmb28YASABKAUSCwoDYmFyGAIgASgFEgsKA2JhehgDIAEoCRILCgNxdXgYBCABKAESDQoFY29yZ2UYBSABKAkSDgoGZ3JhdWx0GAYgASgFKh0KEEVudW1XaXRoQ29tbWVudHMSCQoFVkFMVUUQACpnChlEZXByZWNhdGVkRW51bVdpdGhDb21tZW50EiIKHkRFUFJFQ0FURURfRU5VTV9XSVRIX0NPTU1FTlRfQRAAEiIKHkRFUFJFQ0FURURfRU5VTV9XSVRIX0NPTU1FTlRfQhABGgIYASphChdEZXByZWNhdGVkRW51bU5vQ29tbWVudBIgChxERVBSRUNBVEVEX0VOVU1fTk9fQ09NTUVOVF9BEAASIAocREVQUkVDQVRFRF9FTlVNX05PX0NPTU1FTlRfQhABGgIYAWIGcHJvdG8z");

/**
 * Describes the message spec.MessageWithComments.
 * Use `create(MessageWithCommentsSchema)` to create a new message.
 */
export const MessageWithCommentsSchema = /*@__PURE__*/
  messageDesc(file_extra_comments, 0);

/**
 * Describes the message spec.EmptyMessageWithComment.
 * Use `create(EmptyMessageWithCommentSchema)` to create a new message.
 */
export const EmptyMessageWithCommentSchema = /*@__PURE__*/
  messageDesc(file_extra_comments, 1);

/**
 * Describes the message spec.GoogleCommentExample.
 * Use `create(GoogleCommentExampleSchema)` to create a new message.
 */
export const GoogleCommentExampleSchema = /*@__PURE__*/
  messageDesc(file_extra_comments, 2);

/**
 * Describes the enum spec.EnumWithComments.
 */
export const EnumWithCommentsSchema = /*@__PURE__*/
  enumDesc(file_extra_comments, 0);

/**
 * Leading comment for enum.
 *
 * Comment between start of enum and first value.
 *
 * @generated from enum spec.EnumWithComments
 */
export const EnumWithComments = /*@__PURE__*/
  tsEnum(EnumWithCommentsSchema);

/**
 * Describes the enum spec.DeprecatedEnumWithComment.
 * @deprecated
 */
export const DeprecatedEnumWithCommentSchema = /*@__PURE__*/
  enumDesc(file_extra_comments, 1);

/**
 * Leading comment for deprecated enum
 *
 * @generated from enum spec.DeprecatedEnumWithComment
 * @deprecated
 */
export const DeprecatedEnumWithComment = /*@__PURE__*/
  tsEnum(DeprecatedEnumWithCommentSchema);

/**
 * Describes the enum spec.DeprecatedEnumNoComment.
 * @deprecated
 */
export const DeprecatedEnumNoCommentSchema = /*@__PURE__*/
  enumDesc(file_extra_comments, 2);

/**
 * @generated from enum spec.DeprecatedEnumNoComment
 * @deprecated
 */
export const DeprecatedEnumNoComment = /*@__PURE__*/
  tsEnum(DeprecatedEnumNoCommentSchema);

