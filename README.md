# shmaquery🔥

Shmaquery is a funny reinterpretation of jQuery

## shmilter

```js
あ(selector).shmilter(filterFn);
```

is equal to

```js
Array.prototype.filter.call(document.querySelectorAll(selector), filterFn);
```

## shmadclass

```js
あ(selector).shmadclass(className);
```

is same as

```js
if (el.classList) el.classList.add(className);
else el.className += " " + className;
```

## shmattr

```js
あ(el).shmattr(attrname, value);
```

same as

```js
el.setAttribute("tabindex", 3);
```

## parseBOB

```js
あ.parseBOB(string);
```

same as

```js
JSON.parse(string);
```
