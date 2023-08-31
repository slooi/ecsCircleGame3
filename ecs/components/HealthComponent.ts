import { Component } from "../../packages/ecs";

export default class HealthComponent extends Component {
	private _value: number;
	public get value(): number {
		return this._value;
	}
	public set value(value: number) {
		this._value = value;
	}

	constructor(val: number) {
		super();
		this._value = val;
	}
	healthComponent1() {
		console.log("healthComponent2");
	}
}
