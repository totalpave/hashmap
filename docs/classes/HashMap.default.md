[@totalpave/hashmap - v1.1.3](../README.md) / [Exports](../modules.md) / [HashMap](../modules/HashMap.md) / default

# Class: default<T\>

[HashMap](../modules/HashMap.md).default

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](HashMap.default.md#constructor)

### Methods

- [get](HashMap.default.md#get)
- [iterator](HashMap.default.md#iterator)
- [keys](HashMap.default.md#keys)
- [set](HashMap.default.md#set)
- [toArray](HashMap.default.md#toarray)

## Constructors

### constructor

• **new default**<`T`\>(`data?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHashMapData`](../interfaces/HashMap.IHashMapData.md)<`T`\> |

#### Defined in

[src/HashMap.ts:36](https://github.com/totalpave/hashmap/blob/1ddab60/src/HashMap.ts#L36)

## Methods

### get

▸ **get**(`key`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`T`

#### Defined in

[src/HashMap.ts:45](https://github.com/totalpave/hashmap/blob/1ddab60/src/HashMap.ts#L45)

___

### iterator

▸ **iterator**(): [`DictionaryIterator`](api.DictionaryIterator.md)<`T`\>

#### Returns

[`DictionaryIterator`](api.DictionaryIterator.md)<`T`\>

#### Defined in

[src/HashMap.ts:53](https://github.com/totalpave/hashmap/blob/1ddab60/src/HashMap.ts#L53)

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/HashMap.ts:49](https://github.com/totalpave/hashmap/blob/1ddab60/src/HashMap.ts#L49)

___

### set

▸ **set**(`key`, `value`): [`default`](HashMap.default.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

[`default`](HashMap.default.md)<`T`\>

#### Defined in

[src/HashMap.ts:40](https://github.com/totalpave/hashmap/blob/1ddab60/src/HashMap.ts#L40)

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/HashMap.ts:57](https://github.com/totalpave/hashmap/blob/1ddab60/src/HashMap.ts#L57)
