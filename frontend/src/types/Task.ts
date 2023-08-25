export interface Task {
  _id: string; // Assuming _id is a string, you can change the type if needed
  client_name: string;
  user_name: string;
  descriptions: string;
  comments: number;
  total_users: number;
  attachment_count: number;
  date: string;
  work_status: string;
}
