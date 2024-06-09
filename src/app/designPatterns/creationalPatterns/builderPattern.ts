interface RobotPlan {
    setRobotHead(head: string): void;
    setRobotTorso(torse: string): void;
    setRobotArms(arms: string): void;
    setRobotLegs(legs: string): void;
}

class Robot implements RobotPlan {
    private head!: string;
    private torse!: string;
    private arms!: string;
    private legs!: string;

    setRobotHead(head: string): void {
        this.head = head;
    }

    public getRobotHead(): string { return this.head; }

    setRobotTorso(torse: string): void {
        this.torse = torse;
    }

    public getRobotTorso(): string { return this.torse; }

    setRobotArms(arms: string): void {
        this.arms = arms;
    }

    public getRobotArms(): string { return this.arms; }

    setRobotLegs(legs: string): void {
        this.legs = legs;
    }

    public getRobotLegs(): string { return this.legs; }

}


// Defines the methods needed for creating parts 
// for the robot

interface RobotBuilder {
    buildRobotHead(): void;
    buildRobotTorso(): void;
    buildRobotArms(): void;
    buildRobotLegs(): void;
    getRobot(): Robot;
}

class OldRobotBuilder implements RobotBuilder {

    private robot!: Robot;

    public constructor() {

        this.robot = new Robot();

    }

    public buildRobotHead(): void {

        this.robot.setRobotHead("Tin Head");

    }
    public buildRobotTorso(): void {

        this.robot.setRobotTorso("Tin Torso");

    }
    public buildRobotArms(): void {

        this.robot.setRobotArms("Blowtorch Arms");

    }
    public buildRobotLegs(): void {

        this.robot.setRobotLegs("Rollar Skates");

    }
    public getRobot(): Robot {

        return this.robot;
    }
}

// The director / engineer class creates a Robot using the
// builder interface that is defined (OldRobotBuilder)

class RobotEngineer {

    private robotBuilder!: RobotBuilder;

    // OldRobotBuilder specification is sent to the engineer

    public constructor(robotBuilder: RobotBuilder) {

        this.robotBuilder = robotBuilder;

    }

    // Return the Robot made from the OldRobotBuilder spec

    public getRobot(): Robot {

        return this.robotBuilder.getRobot();

    }

    // Execute the methods specific to the RobotBuilder 
    // that implements RobotBuilder (OldRobotBuilder)

    public makeRobot(): void {

        this.robotBuilder.buildRobotHead();
        this.robotBuilder.buildRobotTorso();
        this.robotBuilder.buildRobotArms();
        this.robotBuilder.buildRobotLegs();

    }

}