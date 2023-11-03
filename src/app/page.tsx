"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import userService from "@/services/client/user.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IconUser } from "@tabler/icons-react";
import { User } from "@/services/utils/types";

interface UserCollection {
  [key: string]: Omit<User, "username">;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<User>();
  const [users, setUsers] = useState<UserCollection>({});
  const router = useRouter();

  const onSubmit: SubmitHandler<User> = (data) => {
    userService.create(data);
    reset();
  };

  const getUsers = async () => {
    const users = await userService.getAll();
    setUsers(users.data);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getUsers();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex h-[calc(100%-64px)] flex-col items-center gap-10 py-16">
      <p className="underline text-xl">Create User</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-[18rem]"
      >
        <div>
          <Label htmlFor="username" className="text-base-content font-medium">
            Username
          </Label>
          <Input
            type="text"
            placeholder="Enter your usename"
            {...register("username", { required: true })}
          />
        </div>
        <div>
          <Label htmlFor="name" className="text-base-content font-medium">
            Name
          </Label>
          <Input
            type="text"
            placeholder="Enter your usename"
            {...register("name", { required: true })}
          />
        </div>
        <div>
          <Label htmlFor="username" className="text-base-content font-medium">
            Password
          </Label>
          <Input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
        </div>
        <button
          type="submit"
          className="btn btn-active btn-accent btn-sm w-full"
        >
          Registrar
        </button>
      </form>
      <div className="flex flex-col gap-2 w-[18rem]">
        <p className="font-bold text-lg">Current users:</p>
        <div className="flex flex-col gap-2">
          {Object.keys(users).map((username, index) => (
            <UserList key={index} user={users[username]} />
          ))}
        </div>
      </div>
    </main>
  );
}

const UserList: React.FC<{ user: Omit<User, "username"> }> = ({ user }) => {
  return (
    <div className="flex gap-4 border border-stone-800/40 rounded-lg p-3">
      <div className="flex bg-gradient-to-b from-stone-900 to-stone-700 rounded-full aspect-square w-12 h-12 items-center justify-center">
        <IconUser className="w-10 h-10 text-white/70" />
      </div>
      <div>
        <p className="font-bold">
          Name:
          <span className="font-normal"> {user.name}</span>
        </p>
        <p className="font-bold">
          Password:
          <span className="font-normal"> {user.password}</span>
        </p>
      </div>
    </div>
  );
};
