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
// @generated from file extra/name-clash.proto (package spec, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message as Message$1 } from "@bufbuild/protobuf";
import type { User as User$1 } from "./example_pb.js";

/**
 * Describes the file extra/name-clash.proto.
 */
export declare const file_extra_name_clash: GenFile;

/**
 * This message class will clash with the imported message class
 *
 * @generated from message spec.User
 */
export declare type User = Message$1<"spec.User"> & {
  /**
   * Reference the import with the same name to trigger a clash
   *
   * @generated from field: example.User u = 1;
   */
  u?: User$1;
};

/**
 * Describes the message spec.User.
 * Use `create(UserSchema)` to create a new message.
 */
export declare const UserSchema: GenMessage<User>;

/**
 * @generated from message spec.ReservedPropertyNames
 */
export declare type ReservedPropertyNames = Message$1<"spec.ReservedPropertyNames"> & {
};

/**
 * Describes the message spec.ReservedPropertyNames.
 * Use `create(ReservedPropertyNamesSchema)` to create a new message.
 */
export declare const ReservedPropertyNamesSchema: GenMessage<ReservedPropertyNames>;

/**
 * @generated from message spec.ReservedPropertyNames.BuiltIn
 */
export declare type ReservedPropertyNames_BuiltIn = Message$1<"spec.ReservedPropertyNames.BuiltIn"> & {
  /**
   * built-in constructor()
   *
   * @generated from field: string constructor = 2;
   */
  constructor$: string;

  /**
   * built-in toString()
   *
   * @generated from field: string to_string = 3;
   */
  toString$: string;

  /**
   * built-in toJSON()
   *
   * @generated from field: string to_JSON = 4;
   */
  toJSON$: string;

  /**
   * built-in valueOf()
   *
   * @generated from field: string value_of = 5;
   */
  valueOf$: string;
};

/**
 * Describes the message spec.ReservedPropertyNames.BuiltIn.
 * Use `create(ReservedPropertyNames_BuiltInSchema)` to create a new message.
 */
export declare const ReservedPropertyNames_BuiltInSchema: GenMessage<ReservedPropertyNames_BuiltIn>;

/**
 * @generated from message spec.ReservedPropertyNames.Runtime
 */
export declare type ReservedPropertyNames_Runtime = Message$1<"spec.ReservedPropertyNames.Runtime"> & {
  /**
   * runtime toJson()
   *
   * @generated from field: string to_json = 4;
   */
  toJson: string;

  /**
   * runtime type()
   *
   * @generated from field: string type = 6;
   */
  type: string;

  /**
   * runtime clone()
   *
   * @generated from field: string clone = 7;
   */
  clone: string;

  /**
   * runtime equals()
   *
   * @generated from field: string equals = 8;
   */
  equals: string;

  /**
   * runtime fromBinary()
   *
   * @generated from field: string from_binary = 9;
   */
  fromBinary: string;

  /**
   * runtime fromJson()
   *
   * @generated from field: string from_json = 10;
   */
  fromJson: string;

  /**
   * runtime fromJsonString()
   *
   * @generated from field: string from_json_string = 11;
   */
  fromJsonString: string;

  /**
   * runtime toBinary()
   *
   * @generated from field: string to_binary = 12;
   */
  toBinary: string;

  /**
   * runtime toJsonString()
   *
   * @generated from field: string to_json_string = 14;
   */
  toJsonString: string;
};

/**
 * Describes the message spec.ReservedPropertyNames.Runtime.
 * Use `create(ReservedPropertyNames_RuntimeSchema)` to create a new message.
 */
export declare const ReservedPropertyNames_RuntimeSchema: GenMessage<ReservedPropertyNames_Runtime>;

/**
 * @generated from message spec.ReservedPropertyNames.OneofBultIn
 */
export declare type ReservedPropertyNames_OneofBultIn = Message$1<"spec.ReservedPropertyNames.OneofBultIn"> & {
  /**
   * @generated from oneof spec.ReservedPropertyNames.OneofBultIn.built_in
   */
  builtIn: {
    /**
     * @generated from field: string constructor = 1;
     */
    value: string;
    case: "constructor";
  } | {
    /**
     * @generated from field: string to_string = 2;
     */
    value: string;
    case: "toString";
  } | {
    /**
     * @generated from field: string to_JSON = 3;
     */
    value: string;
    case: "toJSON";
  } | {
    /**
     * @generated from field: string value_of = 4;
     */
    value: string;
    case: "valueOf";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message spec.ReservedPropertyNames.OneofBultIn.
 * Use `create(ReservedPropertyNames_OneofBultInSchema)` to create a new message.
 */
export declare const ReservedPropertyNames_OneofBultInSchema: GenMessage<ReservedPropertyNames_OneofBultIn>;

/**
 * @generated from message spec.ReservedPropertyNames.OneofRuntime
 */
export declare type ReservedPropertyNames_OneofRuntime = Message$1<"spec.ReservedPropertyNames.OneofRuntime"> & {
  /**
   * @generated from oneof spec.ReservedPropertyNames.OneofRuntime.runtime
   */
  runtime: {
    /**
     * @generated from field: string to_json = 5;
     */
    value: string;
    case: "toJson";
  } | {
    /**
     * @generated from field: string type = 6;
     */
    value: string;
    case: "type";
  } | {
    /**
     * @generated from field: string clone = 7;
     */
    value: string;
    case: "clone";
  } | {
    /**
     * @generated from field: string equals = 8;
     */
    value: string;
    case: "equals";
  } | {
    /**
     * @generated from field: string from_binary = 9;
     */
    value: string;
    case: "fromBinary";
  } | {
    /**
     * @generated from field: string from_json = 10;
     */
    value: string;
    case: "fromJson";
  } | {
    /**
     * @generated from field: string from_json_string = 11;
     */
    value: string;
    case: "fromJsonString";
  } | {
    /**
     * @generated from field: string to_binary = 12;
     */
    value: string;
    case: "toBinary";
  } | {
    /**
     * @generated from field: string to_json_string = 14;
     */
    value: string;
    case: "toJsonString";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message spec.ReservedPropertyNames.OneofRuntime.
 * Use `create(ReservedPropertyNames_OneofRuntimeSchema)` to create a new message.
 */
export declare const ReservedPropertyNames_OneofRuntimeSchema: GenMessage<ReservedPropertyNames_OneofRuntime>;

/**
 * @generated from enum spec.ReservedPropertyNames.EnumBuiltIn
 */
export enum ReservedPropertyNames_EnumBuiltIn {
  /**
   * @generated from enum value: constructor = 0;
   */
  constructor$ = 0,

  /**
   * @generated from enum value: toString = 1;
   */
  toString$ = 1,

  /**
   * @generated from enum value: toJSON = 2;
   */
  toJSON$ = 2,

  /**
   * @generated from enum value: valueOf = 3;
   */
  valueOf$ = 3,
}

/**
 * Describes the enum spec.ReservedPropertyNames.EnumBuiltIn.
 */
export declare const ReservedPropertyNames_EnumBuiltInSchema: GenEnum<ReservedPropertyNames_EnumBuiltIn>;

/**
 * @generated from enum spec.ReservedPropertyNames.EnumBuiltInPrefixed
 */
export enum ReservedPropertyNames_EnumBuiltInPrefixed {
  /**
   * @generated from enum value: ENUM_BUILT_IN_PREFIXED_constructor = 0;
   */
  constructor$ = 0,

  /**
   * @generated from enum value: ENUM_BUILT_IN_PREFIXED_toString = 1;
   */
  toString$ = 1,

  /**
   * @generated from enum value: ENUM_BUILT_IN_PREFIXED_toJSON = 2;
   */
  toJSON$ = 2,

  /**
   * @generated from enum value: ENUM_BUILT_IN_PREFIXED_valueOf = 3;
   */
  valueOf$ = 3,
}

/**
 * Describes the enum spec.ReservedPropertyNames.EnumBuiltInPrefixed.
 */
export declare const ReservedPropertyNames_EnumBuiltInPrefixedSchema: GenEnum<ReservedPropertyNames_EnumBuiltInPrefixed>;

/**
 * @generated from enum spec.ReservedPropertyNames.EnumRuntime
 */
export enum ReservedPropertyNames_EnumRuntime {
  /**
   * @generated from enum value: toJson = 0;
   */
  toJson = 0,

  /**
   * @generated from enum value: type = 6;
   */
  type = 6,

  /**
   * @generated from enum value: clone = 7;
   */
  clone = 7,

  /**
   * @generated from enum value: equals = 8;
   */
  equals = 8,

  /**
   * @generated from enum value: fromBinary = 9;
   */
  fromBinary = 9,

  /**
   * @generated from enum value: fromJson = 10;
   */
  fromJson = 10,

  /**
   * @generated from enum value: fromJsonString = 11;
   */
  fromJsonString = 11,

  /**
   * @generated from enum value: toBinary = 12;
   */
  toBinary = 12,

  /**
   * @generated from enum value: toJsonString = 14;
   */
  toJsonString = 14,
}

/**
 * Describes the enum spec.ReservedPropertyNames.EnumRuntime.
 */
export declare const ReservedPropertyNames_EnumRuntimeSchema: GenEnum<ReservedPropertyNames_EnumRuntime>;

/**
 * reserved identifier
 *
 * @generated from message spec.interface
 */
export declare type interface$ = Message$1<"spec.interface"> & {
};

/**
 * Describes the message spec.interface.
 * Use `create(interfaceSchema)` to create a new message.
 */
export declare const interfaceSchema: GenMessage<interface$>;

/**
 * reserved identifier
 *
 * @generated from message spec.function
 */
export declare type function$ = Message$1<"spec.function"> & {
};

/**
 * Describes the message spec.function.
 * Use `create(functionSchema)` to create a new message.
 */
export declare const functionSchema: GenMessage<function$>;

/**
 * reserved identifier
 *
 * @generated from message spec.instanceof
 */
export declare type instanceof$ = Message$1<"spec.instanceof"> & {
};

/**
 * Describes the message spec.instanceof.
 * Use `create(instanceofSchema)` to create a new message.
 */
export declare const instanceofSchema: GenMessage<instanceof$>;

/**
 * reserved identifier
 *
 * @generated from message spec.switch
 */
export declare type switch$ = Message$1<"spec.switch"> & {
};

/**
 * Describes the message spec.switch.
 * Use `create(switchSchema)` to create a new message.
 */
export declare const switchSchema: GenMessage<switch$>;

/**
 * reserved identifier
 *
 * @generated from message spec.case
 */
export declare type case$ = Message$1<"spec.case"> & {
};

/**
 * Describes the message spec.case.
 * Use `create(caseSchema)` to create a new message.
 */
export declare const caseSchema: GenMessage<case$>;

/**
 * reserved identifier
 *
 * @generated from message spec.return
 */
export declare type return$ = Message$1<"spec.return"> & {
};

/**
 * Describes the message spec.return.
 * Use `create(returnSchema)` to create a new message.
 */
export declare const returnSchema: GenMessage<return$>;

/**
 * used by runtime
 *
 * @generated from message spec.Message
 */
export declare type Message = Message$1<"spec.Message"> & {
};

/**
 * Describes the message spec.Message.
 * Use `create(MessageSchema)` to create a new message.
 */
export declare const MessageSchema: GenMessage<Message>;

/**
 * used by runtime
 *
 * @generated from message spec.PartialMessage
 */
export declare type PartialMessage = Message$1<"spec.PartialMessage"> & {
};

/**
 * Describes the message spec.PartialMessage.
 * Use `create(PartialMessageSchema)` to create a new message.
 */
export declare const PartialMessageSchema: GenMessage<PartialMessage>;

/**
 * used by runtime
 *
 * @generated from message spec.PlainMessage
 */
export declare type PlainMessage = Message$1<"spec.PlainMessage"> & {
};

/**
 * Describes the message spec.PlainMessage.
 * Use `create(PlainMessageSchema)` to create a new message.
 */
export declare const PlainMessageSchema: GenMessage<PlainMessage>;

/**
 * clash with global type "Error"
 * either this message name is escaped in generated code, or the generated
 * code must escape its calls to the global error object (i.e. `new Error`)
 *
 * @generated from message spec.Error
 */
export declare type Error = Message$1<"spec.Error"> & {
  /**
   * @generated from field: string field_name = 1;
   */
  fieldName: string;

  /**
   * @generated from field: string message = 2;
   */
  message: string;
};

/**
 * Describes the message spec.Error.
 * Use `create(ErrorSchema)` to create a new message.
 */
export declare const ErrorSchema: GenMessage<Error>;

/**
 * clash with global type
 *
 * @generated from message spec.Object
 */
export declare type Object$ = Message$1<"spec.Object"> & {
};

/**
 * Describes the message spec.Object.
 * Use `create(ObjectSchema)` to create a new message.
 */
export declare const ObjectSchema: GenMessage<Object$>;

/**
 * @generated from message spec.object
 */
export declare type object$ = Message$1<"spec.object"> & {
};

/**
 * Describes the message spec.object.
 * Use `create(objectSchema)` to create a new message.
 */
export declare const objectSchema: GenMessage<object$>;

/**
 * clash with global type
 *
 * @generated from message spec.array
 */
export declare type array = Message$1<"spec.array"> & {
};

/**
 * Describes the message spec.array.
 * Use `create(arraySchema)` to create a new message.
 */
export declare const arraySchema: GenMessage<array>;

/**
 * clash with global type
 *
 * @generated from message spec.string
 */
export declare type string$ = Message$1<"spec.string"> & {
};

/**
 * Describes the message spec.string.
 * Use `create(stringSchema)` to create a new message.
 */
export declare const stringSchema: GenMessage<string$>;

/**
 * clash with global type
 *
 * @generated from message spec.number
 */
export declare type number$ = Message$1<"spec.number"> & {
};

/**
 * Describes the message spec.number.
 * Use `create(numberSchema)` to create a new message.
 */
export declare const numberSchema: GenMessage<number$>;

/**
 * clash with global type
 *
 * @generated from message spec.boolean
 */
export declare type boolean$ = Message$1<"spec.boolean"> & {
};

/**
 * Describes the message spec.boolean.
 * Use `create(booleanSchema)` to create a new message.
 */
export declare const booleanSchema: GenMessage<boolean$>;

/**
 * clash with global type
 *
 * @generated from message spec.bigint
 */
export declare type bigint$ = Message$1<"spec.bigint"> & {
};

/**
 * Describes the message spec.bigint.
 * Use `create(bigintSchema)` to create a new message.
 */
export declare const bigintSchema: GenMessage<bigint$>;

/**
 * clash with global type
 *
 * @generated from message spec.Uint8Array
 */
export declare type Uint8Array$ = Message$1<"spec.Uint8Array"> & {
};

/**
 * Describes the message spec.Uint8Array.
 * Use `create(Uint8ArraySchema)` to create a new message.
 */
export declare const Uint8ArraySchema: GenMessage<Uint8Array$>;

/**
 * clash with global type
 *
 * @generated from message spec.Array
 */
export declare type Array = Message$1<"spec.Array"> & {
};

/**
 * Describes the message spec.Array.
 * Use `create(ArraySchema)` to create a new message.
 */
export declare const ArraySchema: GenMessage<Array>;

/**
 * clash with global type
 *
 * @generated from message spec.String
 */
export declare type String = Message$1<"spec.String"> & {
};

/**
 * Describes the message spec.String.
 * Use `create(StringSchema)` to create a new message.
 */
export declare const StringSchema: GenMessage<String>;

/**
 * clash with global type
 *
 * @generated from message spec.Number
 */
export declare type Number = Message$1<"spec.Number"> & {
};

/**
 * Describes the message spec.Number.
 * Use `create(NumberSchema)` to create a new message.
 */
export declare const NumberSchema: GenMessage<Number>;

/**
 * clash with global type
 *
 * @generated from message spec.Boolean
 */
export declare type Boolean = Message$1<"spec.Boolean"> & {
};

/**
 * Describes the message spec.Boolean.
 * Use `create(BooleanSchema)` to create a new message.
 */
export declare const BooleanSchema: GenMessage<Boolean>;

/**
 * clash with global type
 *
 * @generated from message spec.BigInt
 */
export declare type BigInt = Message$1<"spec.BigInt"> & {
};

/**
 * Describes the message spec.BigInt.
 * Use `create(BigIntSchema)` to create a new message.
 */
export declare const BigIntSchema: GenMessage<BigInt>;

/**
 * @generated from message spec.ClashParent
 */
export declare type ClashParent = Message$1<"spec.ClashParent"> & {
};

/**
 * Describes the message spec.ClashParent.
 * Use `create(ClashParentSchema)` to create a new message.
 */
export declare const ClashParentSchema: GenMessage<ClashParent>;

/**
 * should clash with message ClashParent_ClashChild
 *
 * @generated from message spec.ClashParent.ClashChild
 */
export declare type ClashParent_ClashChild = Message$1<"spec.ClashParent.ClashChild"> & {
};

/**
 * Describes the message spec.ClashParent.ClashChild.
 * Use `create(ClashParent_ClashChildSchema)` to create a new message.
 */
export declare const ClashParent_ClashChildSchema: GenMessage<ClashParent_ClashChild>;

/**
 * should clash with name of ClashParent.ClashChild
 *
 * @generated from message spec.ClashParent_ClashChild
 */
export declare type ClashParent_ClashChild$ = Message$1<"spec.ClashParent_ClashChild"> & {
};

/**
 * Describes the message spec.ClashParent_ClashChild.
 * Use `create(ClashParent_ClashChildSchema$)` to create a new message.
 */
export declare const ClashParent_ClashChildSchema$: GenMessage<ClashParent_ClashChild$>;

/**
 * message shape should clash with enum descriptor
 *
 * @generated from message spec.EnumDescClashWithMessageShapeDesc
 */
export declare type EnumDescClashWithMessageShapeDesc = Message$1<"spec.EnumDescClashWithMessageShapeDesc"> & {
};

/**
 * Describes the message spec.EnumDescClashWithMessageShapeDesc.
 * Use `create(EnumDescClashWithMessageShapeDescSchema)` to create a new message.
 */
export declare const EnumDescClashWithMessageShapeDescSchema: GenMessage<EnumDescClashWithMessageShapeDesc>;

/**
 * @generated from message spec.EnumShapeClashWithMessageDesc
 */
export declare type EnumShapeClashWithMessageDesc = Message$1<"spec.EnumShapeClashWithMessageDesc"> & {
};

/**
 * Describes the message spec.EnumShapeClashWithMessageDesc.
 * Use `create(EnumShapeClashWithMessageDescSchema)` to create a new message.
 */
export declare const EnumShapeClashWithMessageDescSchema: GenMessage<EnumShapeClashWithMessageDesc>;

/**
 * @generated from message spec.NoClashFields
 */
export declare type NoClashFields = Message$1<"spec.NoClashFields"> & {
  /**
   * ok as object property
   *
   * @generated from field: string const = 1;
   */
  const: string;

  /**
   * ok as object property
   *
   * @generated from field: string switch = 2;
   */
  switch: string;

  /**
   * ok as object property
   *
   * @generated from field: string case = 3;
   */
  case: string;

  /**
   * ok as object property
   *
   * @generated from field: string function = 4;
   */
  function: string;

  /**
   * ok as object property
   *
   * @generated from field: string interface = 5;
   */
  interface: string;

  /**
   * ok as object property
   *
   * @generated from field: string return = 6;
   */
  return: string;
};

/**
 * Describes the message spec.NoClashFields.
 * Use `create(NoClashFieldsSchema)` to create a new message.
 */
export declare const NoClashFieldsSchema: GenMessage<NoClashFields>;

/**
 * @generated from message spec.NoClashOneof
 */
export declare type NoClashOneof = Message$1<"spec.NoClashOneof"> & {
  /**
   * @generated from oneof spec.NoClashOneof.kind
   */
  kind: {
    /**
     * ok as object property
     *
     * @generated from field: string const = 1;
     */
    value: string;
    case: "const";
  } | {
    /**
     * ok as object property
     *
     * @generated from field: string switch = 2;
     */
    value: string;
    case: "switch";
  } | {
    /**
     * ok as object property
     *
     * @generated from field: string case = 3;
     */
    value: string;
    case: "case";
  } | {
    /**
     * ok as object property
     *
     * @generated from field: string function = 4;
     */
    value: string;
    case: "function";
  } | {
    /**
     * ok as object property
     *
     * @generated from field: string interface = 5;
     */
    value: string;
    case: "interface";
  } | {
    /**
     * ok as object property
     *
     * @generated from field: string return = 6;
     */
    value: string;
    case: "return";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message spec.NoClashOneof.
 * Use `create(NoClashOneofSchema)` to create a new message.
 */
export declare const NoClashOneofSchema: GenMessage<NoClashOneof>;

/**
 * @generated from message spec.NoClashOneofADT
 */
export declare type NoClashOneofADT = Message$1<"spec.NoClashOneofADT"> & {
  /**
   * @generated from field: spec.NoClashOneofADT.M m = 1;
   */
  m?: NoClashOneofADT_M;
};

/**
 * Describes the message spec.NoClashOneofADT.
 * Use `create(NoClashOneofADTSchema)` to create a new message.
 */
export declare const NoClashOneofADTSchema: GenMessage<NoClashOneofADT>;

/**
 * @generated from message spec.NoClashOneofADT.M
 */
export declare type NoClashOneofADT_M = Message$1<"spec.NoClashOneofADT.M"> & {
  /**
   * @generated from field: string case = 1;
   */
  case: string;

  /**
   * @generated from field: optional string value = 2;
   */
  value?: string;
};

/**
 * Describes the message spec.NoClashOneofADT.M.
 * Use `create(NoClashOneofADT_MSchema)` to create a new message.
 */
export declare const NoClashOneofADT_MSchema: GenMessage<NoClashOneofADT_M>;

/**
 * just here as a "namespace" for the enum
 *
 * @generated from message spec.NoClashEnumWrap
 */
export declare type NoClashEnumWrap = Message$1<"spec.NoClashEnumWrap"> & {
};

/**
 * Describes the message spec.NoClashEnumWrap.
 * Use `create(NoClashEnumWrapSchema)` to create a new message.
 */
export declare const NoClashEnumWrapSchema: GenMessage<NoClashEnumWrap>;

/**
 * @generated from enum spec.NoClashEnumWrap.X
 */
export enum NoClashEnumWrap_X {
  /**
   * ok as object property
   *
   * @generated from enum value: instanceof = 0;
   */
  instanceof = 0,

  /**
   * ok as object property
   *
   * @generated from enum value: switch = 1;
   */
  switch = 1,

  /**
   * ok as object property
   *
   * @generated from enum value: case = 3;
   */
  case = 3,

  /**
   * ok as object property
   *
   * @generated from enum value: function = 4;
   */
  function = 4,

  /**
   * ok as object property
   *
   * @generated from enum value: interface = 5;
   */
  interface = 5,

  /**
   * ok as object property
   *
   * @generated from enum value: return = 6;
   */
  return = 6,
}

/**
 * Describes the enum spec.NoClashEnumWrap.X.
 */
export declare const NoClashEnumWrap_XSchema: GenEnum<NoClashEnumWrap_X>;

/**
 * @generated from enum spec.EnumDescClashWithMessageShape
 */
export enum EnumDescClashWithMessageShape {
  /**
   * @generated from enum value: MessageDescClashWithEnumDescDesc_zero = 0;
   */
  MessageDescClashWithEnumDescDesc_zero = 0,
}

/**
 * Describes the enum spec.EnumDescClashWithMessageShape.
 */
export declare const EnumDescClashWithMessageShapeSchema: GenEnum<EnumDescClashWithMessageShape>;

/**
 * enum shape should clash with message descriptor
 *
 * @generated from enum spec.EnumShapeClashWithMessageDescDesc
 */
export enum EnumShapeClashWithMessageDescDesc {
  /**
   * @generated from enum value: EnumShapeClashWithMessageDescDesc_zero = 0;
   */
  EnumShapeClashWithMessageDescDesc_zero = 0,
}

/**
 * Describes the enum spec.EnumShapeClashWithMessageDescDesc.
 */
export declare const EnumShapeClashWithMessageDescDescSchema: GenEnum<EnumShapeClashWithMessageDescDesc>;

/**
 * @generated from service spec.ReservedPropertyNamesService
 */
export declare const ReservedPropertyNamesService: GenService<{
  /**
   * @generated from rpc spec.ReservedPropertyNamesService.constructor
   */
  constructor$: {
    methodKind: "unary";
    input: typeof ErrorSchema;
    output: typeof ErrorSchema;
  },
  /**
   * @generated from rpc spec.ReservedPropertyNamesService.toString
   */
  toString$: {
    methodKind: "unary";
    input: typeof ErrorSchema;
    output: typeof ErrorSchema;
  },
  /**
   * @generated from rpc spec.ReservedPropertyNamesService.to_JSON
   */
  to_JSON: {
    methodKind: "unary";
    input: typeof ErrorSchema;
    output: typeof ErrorSchema;
  },
  /**
   * @generated from rpc spec.ReservedPropertyNamesService.value_of
   */
  value_of: {
    methodKind: "unary";
    input: typeof ErrorSchema;
    output: typeof ErrorSchema;
  },
}>;

