export interface Robot {
  id: number; // Unique identifier for the robot
  name: string; // Name of the robot
  powermove: string; // Special move of the robot
  experience: number; // Experience points of the robot
  outOfOrder: boolean; // Indicates if the robot is out of order
  avatar: string; // URL of the robot's avatar image
}

export interface Team {
  name: string; // Name of the team
  members: Robot[]; // Array of robots belonging to the team
}

export interface DanceOffResult {
  id: number; // Unique identifier for the dance-off result
  winner: number; // ID of the winning robot
  loser: number; // ID of the losing robot
  dancedAt: string; // Timestamp indicating when the dance-off occurred
}
