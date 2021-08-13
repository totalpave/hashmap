[@totalpave/hashmap - v1.1.3](../README.md) / [Exports](../modules.md) / [api](../modules/api.md) / DictionaryIterator

# Class: DictionaryIterator<T\>

[api](../modules/api.md).DictionaryIterator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Iterator`](api.Iterator.md)<`any`\>

  ↳ **`DictionaryIterator`**

## Table of contents

### Constructors

- [constructor](api.DictionaryIterator.md#constructor)

### Methods

- [bringToEnd](api.DictionaryIterator.md#bringtoend)
- [bringToStart](api.DictionaryIterator.md#bringtostart)
- [decrementIndex](api.DictionaryIterator.md#decrementindex)
- [hasNext](api.DictionaryIterator.md#hasnext)
- [hasPrevious](api.DictionaryIterator.md#hasprevious)
- [incrementIndex](api.DictionaryIterator.md#incrementindex)
- [next](api.DictionaryIterator.md#next)
- [peekNextIndex](api.DictionaryIterator.md#peeknextindex)
- [peekPreviousIndex](api.DictionaryIterator.md#peekpreviousindex)
- [previous](api.DictionaryIterator.md#previous)
- [reset](api.DictionaryIterator.md#reset)

## Constructors

### constructor

• **new DictionaryIterator**<`T`\>(`dictionary`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dictionary` | [`IDictionary`](../interfaces/api.IDictionary.md) |

#### Overrides

[Iterator](api.Iterator.md).[constructor](api.Iterator.md#constructor)

#### Defined in

node_modules/@breautek/iterator/lib/DictionaryIterator.d.ts:11

## Methods

### bringToEnd

▸ **bringToEnd**(): `void`

#### Returns

`void`

#### Inherited from

[Iterator](api.Iterator.md).[bringToEnd](api.Iterator.md#bringtoend)

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:11

___

### bringToStart

▸ **bringToStart**(): `void`

#### Returns

`void`

#### Inherited from

[Iterator](api.Iterator.md).[bringToStart](api.Iterator.md#bringtostart)

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:10

___

### decrementIndex

▸ **decrementIndex**(): `number`

#### Returns

`number`

#### Inherited from

[Iterator](api.Iterator.md).[decrementIndex](api.Iterator.md#decrementindex)

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:15

___

### hasNext

▸ **hasNext**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Iterator](api.Iterator.md).[hasNext](api.Iterator.md#hasnext)

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:5

___

### hasPrevious

▸ **hasPrevious**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Iterator](api.Iterator.md).[hasPrevious](api.Iterator.md#hasprevious)

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:7

___

### incrementIndex

▸ **incrementIndex**(): `number`

#### Returns

`number`

#### Inherited from

[Iterator](api.Iterator.md).[incrementIndex](api.Iterator.md#incrementindex)

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:14

___

### next

▸ **next**(): [`IDictionaryIteratorResult`](../interfaces/api.IDictionaryIteratorResult.md)<`T`\>

#### Returns

[`IDictionaryIteratorResult`](../interfaces/api.IDictionaryIteratorResult.md)<`T`\>

#### Overrides

[Iterator](api.Iterator.md).[next](api.Iterator.md#next)

#### Defined in

node_modules/@breautek/iterator/lib/DictionaryIterator.d.ts:12

___

### peekNextIndex

▸ **peekNextIndex**(): `number`

#### Returns

`number`

#### Inherited from

[Iterator](api.Iterator.md).[peekNextIndex](api.Iterator.md#peeknextindex)

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:12

___

### peekPreviousIndex

▸ **peekPreviousIndex**(): `number`

#### Returns

`number`

#### Inherited from

[Iterator](api.Iterator.md).[peekPreviousIndex](api.Iterator.md#peekpreviousindex)

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:13

___

### previous

▸ **previous**(): [`IDictionaryIteratorResult`](../interfaces/api.IDictionaryIteratorResult.md)<`T`\>

#### Returns

[`IDictionaryIteratorResult`](../interfaces/api.IDictionaryIteratorResult.md)<`T`\>

#### Overrides

[Iterator](api.Iterator.md).[previous](api.Iterator.md#previous)

#### Defined in

node_modules/@breautek/iterator/lib/DictionaryIterator.d.ts:13

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[Iterator](api.Iterator.md).[reset](api.Iterator.md#reset)

#### Defined in

node_modules/@breautek/iterator/lib/Iterator.d.ts:9
