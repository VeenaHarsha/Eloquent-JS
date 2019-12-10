function skipSpace_old (input) {
  const first = input.search(/\S/)
  if (first === -1) return ''
  return input.slice(first)
}
function skipSpace(string) {
  const first = string.match(/^(\s|#.*)*/)
  if (first === -1) return ''
  return string.slice(first[0].length)
}

function parseApply (expr, program) {
  program = skipSpace(program)
  if (program[0] !== '(') {
    return { expr: expr, rest: program }
  }
  program = skipSpace(program.slice(1))
  expr = { type: 'apply', operator: expr, args: [] }
  while (program[0] !== ')') {
    const arg = parseExpression(program)
    expr.args.push(arg.expr)
    program = skipSpace(arg.rest)
    if (program[0] === ',') {
      program = skipSpace(program.slice(1))
    } else if (program[0] !== ')') {
      throw new SyntaxError("1.Expected ',' or ')'")
    }
  }
  return parseApply(expr, program.slice(1))
}
function parseExpression (program) {
  program = skipSpace(program)
  let match, expr
  if (match = /^"([^"]*)"/.exec(program)) {
    expr = { type: 'value', value: match[1] }
  } else if (match = /^\d+\b/.exec(program)) {
    expr = { type: 'value', value: Number(match[0]) }
  } else if (match = /^[^\s(),#"]+/.exec(program)) {
    expr = { type: 'word', name: match[0] }
  } else {
    throw new SyntaxError('2.Unexpected syntax:' + program)
  }
  return parseApply(expr, program.slice(match[0].length))
}
function parse (program) {
  const { expr, rest } = parseExpression(program)
  if (skipSpace(rest).length > 0) {
    throw new SyntaxError('3.Unexpected text after program')
  }
  return expr
}
// console.log(parse('+(a, 10)'))
const specialForms = Object.create(null)

specialForms.if = (args, scope) => {
  if (args.length !== 3) {
    throw new SyntaxError('4.Wrong Number of args to if')
  } else if (evaluate(args[0], scope) !== false) {
    return evaluate(args[1], scope)
  } else {
    return evaluate(args[2], scope)
  }
}
specialForms.while = (args, scope) => {
  if (args.length !== 2) {
    throw new SyntaxError('5.Wrong number of args to while')
  }
  while (evaluate(args[0], scope) !== false) {
    evaluate(args[1], scope)
  }
  return false
}
specialForms.do = (args, scope) => {
  let value = false
  for (const arg of args) {
    value = evaluate(arg, scope)
  }
  return value
}
specialForms.define = (args, scope) => {
  if (args.length !== 2 || args[0].type !== 'word') {
    throw new SyntaxError('6.Incorrect use of define')
  }
  const value = evaluate(args[1], scope)
  scope[args[0].name] = value
  return value
}
specialForms.set = (args, scope) => {
  if (args.length != 2 && args[0].type != 'word') {
    throw new SyntaxError('Incorrect use of set')
  }
  const value = evaluate(args[1], scope)
  for (let s = scope; s; s = Object.getPrototypeOf(s)) {
    if (Object.prototype.hasOwnProperty.call(s, args[0].name)) {
      s[args[0].name] = value
      return value
    }
  }
  throw new ReferenceError(`${args[0].name} is not defined `)
}
specialForms.fun = (args, scope) => {
  if (!args.length) {
    throw new SyntaxError('7.Functions need a body')
  }
  const body = args[args.length - 1]
  const params = args.slice(0, args.length - 1)
    .map(expr => {
      if (expr.type !== 'word') {
        throw new SyntaxError('8.Parameter names must be words')
      }
      return expr.name
    })
  return function () {
    if (arguments.length !== params.length) {
      throw new TypeError('9.Wrong number of arguments')
    }
    const localScope = Object.create(scope)
    for (let i = 0; i < arguments.length; i++) {
      localScope[params[i]] = arguments[i]
    }
    return evaluate(body, localScope)
  }
}
function evaluate (expr, scope) {
  if (expr.type === 'value') {
    return expr.value
  } else if (expr.type === 'word') {
    if (expr.name in scope) {
      return scope[expr.name]
    } else {
      throw new ReferenceError(`10.Undefined binding: ${expr.name}`)
    }
  } else if (expr.type === 'apply') {
    const { operator, args } = expr
    if (operator.type === 'word' && operator.name in specialForms) {
      return specialForms[operator.name](expr.args, scope)
    } else {
      const op = evaluate(operator, scope)
      if (typeof op === 'function') {
        return op(...args.map(arg => evaluate(arg, scope)))
      } else {
        throw new TypeError('11.Applying a non-function')
      }
    }
  }
}
const topScope = Object.create(null)
topScope.true = true
topScope.false = false

topScope.print = value => {
  console.log(value)
  return value
}

for (const op of ['+', '-', '*', '/', '==', '<', '>']) {
  topScope[op] = Function('a,b', `return a ${op} b;`)
}
topScope.array = (...args) => args;

topScope.length = args => {
  return args.length
}

topScope.element = (args,n) =>{
  return args[n]
}

function run (program) {
  return evaluate(parse(program), Object.create(topScope))
}
run(`
do(define(total, 0),
   define(count, 1),
   while(<(count, 11),
         do(define(total, +(total, count)),
            define(count, +(count, 1)))),
   print(total))
`)

run(`
do(define(plusOne, fun(a, +(a, 1))),
   print(plusOne(10)))
`)
// → 11

run(`
do(define(pow, fun(base, exp,
     if(==(exp, 0),
        1,
        *(base, pow(base, -(exp, 1)))))),
   print(pow(2, 10)))
`)
run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`)
// → 50
// run(`set(quux, true)`)
// → Some kind of ReferenceError

run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`)

run(`
do(define(f, fun(a, fun(b, +(a, b)))),
   print(f(4)(5)))
`)
