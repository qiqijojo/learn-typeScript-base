/**
 * string类型
 */
function greeter(person: string) {
    return 'hello'+ person;
}
let user = '1';
console.log('string类型', greeter(user));

/**
 * number类型
 */
let isNumber: number = 3;

/**
 * 数组类型
 */
let isDone: number[] = [1,2,3];
isDone[2] = '9'
let arr: Array<number> = [3,3,4]

/**
 * 元祖类型 ==== 表示一个已知元素数量和类型的数组
 */
let tupleVal: [string, number] = ['1', 3];
tupleVal[0].substr;
tupleVal[1].substr;
tupleVal[4] = '4444';
let qrTupleVal: [number, [string, number]] = [4, ['9', 8]];

/**
 * 枚举 ==== 可以由枚举的值得到它的名字
 */
enum Color { Red = 3, Green = -1, Blue }
let c: Color = Color.Green;
let enumName: string = Color[2]

/**
 * any类型 ==== 不希望类型检查器对这些值进行检查
 */
let anyVal: any = 1;
anyVal = '9';
anyVal = [1,2,3,4];

let notSure: any = 4;
notSure.ifItExists();
notSure.toFixed();

let prettySure: Object = 4;
prettySure.ifItExists();
prettySure.toFixed();

let anyList: any[] = [1, true, 'haha'];
anyList[3] = 3;

/**
 * void ==== void类型像是与any类型相反，它表示没有任何类型
 */
function voidFunc(): void {
    console.log('无返回值')
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;

/**
 * undefined/null ==== 所有类型的子类型
 */
let u: undefined = undefined;
let u1: undefined = null;
let n: null = null;
let n1: null = undefined;
let val1: number = undefined;
let val2: number = null;
// 当指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自

/**
 * never ==== 表示那些用不存在的类型，也可以赋值给任何类型
 */

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

/**
 * object ==== 表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
 */
declare function create(o: object | null): void;
create({ prop: 1 });
create(null);
create(11);
create('string');
create(false);
create(undefined);

/**
 * 类型断言 ==== 
 */
// （一：”尖括号“语法）
let typeVal: any = 'aaa';
let strLength: number = (<string>typeVal).length;
let aa: number = <string>typeVal.length; // 带不带括号的区别
// （二：“as”语法）
let asVal: any = 'bbbb';
let asLength: number = (asVal as string).length;
