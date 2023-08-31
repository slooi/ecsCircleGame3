import { Component } from "../../packages/ecs";

export default class Position2D extends Component {
	private _x: number;
	private _y: number;

	constructor(x: number, y: number) {
		super();
		this._x = x;
		this._y = y;
	}

	/* 
		GETTERS AND SETTERS
	*/

	public get x(): number {
		return this._x;
	}
	public set x(value: number) {
		this._x = value;
	}
	public get y(): number {
		return this._y;
	}
	public set y(value: number) {
		this._y = value;
	}
}
