/**
 * 接口 ==== 必须至少包含接口定义的其中一个属性
 */
/**
 * 初探接口
 */
interface LabelVal { // 接口名尽量大写
    label: string
}
function printLabel (labelParam: LabelVal) {
    console.log(labelParam.label);
}
let myObj = { size: 10, label: 'aaa' };
printLabel(myObj);

/**
 * 可选属性 ---- ?
 */
interface SquareConfig {
    color?: string,
    width?: number
}
function createSquare(config: SquareConfig): { color: string, area: number } {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: 'blue' });


 /**
  * 只读属性 ---- readonly
  */
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5;

/**
 * 只读属性 ---- ReadonlyArray<T>与Array<T>写法类似
 */
let a: number[] = [1,2,3,4];
let roa: ReadonlyArray<number> = a;
roa[1] = 3;
roa.push(9);
roa.length = 10;
a[0] = 3;
a[5] = 5;
a = roa; // 需要用类型断言重新写，不能直接赋值
a = roa as number[];


/**
 * 额外的属性检查
 */
interface SquareConfig {
    color?: string,
    width?: number,
    [propName: string]: any // 放开后aa校验通过，注释后aa校验不通过
}
function extraCreateSquare(config: SquareConfig): { color: string, area: number } {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let myExtraSquare = extraCreateSquare({ color: 'blue' });
let myExtraSquare1 = extraCreateSquare({ aa: 100, color: 'blue' }); // 需要多加一个类型:[propName: string]: any

/**
 * 函数类型
 */
interface SearchFunc {
    (source: string, subString: string): boolean
}
let mySearch: SearchFunc;
mySearch = function (str: string, sub: string): boolean {
    let result = str.search(sub);
    return result > -1;
}

/**
 * 可索引的类型
 */
interface StringArray {
    [index: number]: string
}
let myArray: StringArray = ['Bob', 'Fred'];
let myStr = myArray[1];

/**
 * 类类型
 */
// 类实现接口

// 接口继承接口

// 接口继承类 --- 这个类的子类才能实现接口
