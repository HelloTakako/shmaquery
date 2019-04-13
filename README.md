# shmaquery

Shmaquery is a funny reinterpretation of jQuery

## shmilter

```js
~(selector).shmilter(filterFn);
```
is equal to
```js
Array.prototype.filter.call(document.querySelectorAll(selector), filterFn);
```

## shmadclass

```js
~(selector).shmadclass(className);
```

is same as
```js
if (el.classList)
  el.classList.add(className);
else
  el.className += ' ' + className;
```

## shmattr

```js
~(el).smattr(attrname, value);
```
same as
```js
el.setAttribute('tabindex', 3);
```

## parseBOB

```js
~.parseBOB(string);
```
same as
```js
JSON.parse(string);
```
