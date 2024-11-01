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

// @generated by protoc-gen-es v2.2.2 with parameter "target=js+dts,import_extension=js"
// @generated from file google/protobuf/unittest_invalid_features.proto (package pb, syntax proto2)
/* eslint-disable */

import type { GenExtension, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { FeatureSet } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file google/protobuf/unittest_invalid_features.proto.
 */
export declare const file_google_protobuf_unittest_invalid_features: GenFile;

/**
 * @generated from message pb.TestInvalidFeatures
 */
export declare type TestInvalidFeatures = Message<"pb.TestInvalidFeatures"> & {
  /**
   * @generated from field: repeated int32 repeated_feature = 1;
   */
  repeatedFeature: number[];
};

/**
 * Describes the message pb.TestInvalidFeatures.
 * Use `create(TestInvalidFeaturesSchema)` to create a new message.
 */
export declare const TestInvalidFeaturesSchema: GenMessage<TestInvalidFeatures>;

/**
 * @generated from extension: optional pb.TestInvalidFeatures test_invalid = 9996;
 */
export declare const test_invalid: GenExtension<FeatureSet, TestInvalidFeatures>;

