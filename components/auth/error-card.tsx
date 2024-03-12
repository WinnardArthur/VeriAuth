import React from "react";
import { Header } from "@/components/auth/header";
import { BackButton } from "./button-button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Oops! Something went wrong!" />
      </CardHeader>
      <CardFooter>
        <BackButton href="/auth/login" label="Back to login" />
      </CardFooter>
    </Card>
  );
};

export { ErrorCard };
