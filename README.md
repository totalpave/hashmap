# @totalpave/hashmap

## Description

A generic hashmap collection class

## Installation

`npm install @totalpave/hashmap`

## Usage

```typescript
import HashMap from '@totalpave/hashmap';

let hashmap: HashMap<string> = new HashMap<string>();
hashmap.set('firstName', 'John')
       .set('lastName', 'Smith');

hashmap.get('firstName'); // 'John'

hashmap.keys(); // ['firstName', 'lastName']
```

## API

_TBD_
