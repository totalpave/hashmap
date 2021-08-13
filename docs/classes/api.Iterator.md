[@totalpave/hashmap - v1.1.3](../README.md) / [Exports](../modules.md) / [api](../modules/api.md) / Iterator

# Class: Iterator<T\>

[api](../modules/api.md).Iterator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`Iterator`**

  ↳ [`DictionaryIterator`](api.DictionaryIterator.md)

## Table of contents

### Constructors

- [constructor](api.Iterator.md#constructor)

### Methods

- [bringToEnd](api.Iterator.md#bringtoend)
- [bringToStart](api.Iterator.md#bringtostart)
- [decrementIndex](api.Iterator.md#decrementindex)
- [hasNext](api.Iterator.md#hasnext)
- [hasPrevious](api.Iterator.md#hasprevious)
- [incrementIndex](api.Iterator.md#incrementindex)
- [next](api.Iterator.md#next)
- [peekNextIndex](api.Iterator.md#peeknextindex)
- [peekPreviousIndex](api.Iterator.md#peekpreviousindex)
- [previous](api.Iterator.md#previous)
- [reset](api.Iterator.md#reset)

## Constructors

### constructor

• **new Iterator**<`T`\>(`collection?`, `index?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection?` | `T`[] |
| `index?` | `number` |

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:4

## Methods

### bringToEnd

▸ **bringToEnd**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:11

___

### bringToStart

▸ **bringToStart**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:10

___

### decrementIndex

▸ **decrementIndex**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:15

___

### hasNext

▸ **hasNext**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:5

___

### hasPrevious

▸ **hasPrevious**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:7

___

### incrementIndex

▸ **incrementIndex**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:14

___

### next

▸ **next**(): `T`

#### Returns

`T`

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:6

___

### peekNextIndex

▸ **peekNextIndex**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:12

___

### peekPreviousIndex

▸ **peekPreviousIndex**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:13

___

### previous

▸ **previous**(): `T`

#### Returns

`T`

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:8

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:9
