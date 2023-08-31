import { ECSManager, System } from "../../packages/ecs";
import HealthComponent from "../components/HealthComponent";
import Position2DComponent from "../components/Position2DComponent";
import StuckComponent from "../components/StuckComponent";

export default class GoUpSystem extends System {
	update(ecsManager: ECSManager): void {
		const entityComponentObjectArray = ecsManager.view(Position2DComponent, HealthComponent);

		entityComponentObjectArray[0][1].get(HealthComponent);
		// entityComponentObjectArray[2][1].get()
		entityComponentObjectArray.forEach((entityComponentObject) => {
			const componentObject = entityComponentObject[1];
			const healthComponent = componentObject.get(HealthComponent);
			healthComponent.value;
		});
	}
	constructor() {
		super();
	}
}
