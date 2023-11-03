import UserService from "../../../services/server/user.service";

export async function GET() {
  try {
    const users = await UserService.getAll();
    if (users) {
      return Response.json({ statusCode: 200, data: users.val() });
    } else {
      return Response.json({ statusCode: 200, message: "No data available" });
    }
  } catch (error: any) {
    return Response.json({ statusCode: 500, message: error.message });
  }
}

export async function POST(request: Request) {
  try {
    const user = await request.json();
    UserService.create(user);
    return Response.json({ statusCode: 200, data: user });
  } catch (error: any) {
    return Response.json({ statusCode: 500, message: error.message });
  }
}
