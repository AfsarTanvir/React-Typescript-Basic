import {useActionState } from 'react'
import { Card } from 'react-bootstrap';

type FormResult = {
  message?: string;
  error?: string;
  name?: string;
  password?: string;
};

function UseAction() {
    const handleSubmit = async (
      _previousData: FormResult | undefined,
      formData: FormData
    ): Promise<FormResult> => {
      let name = formData.get("name") as string | null;
      let password = formData.get("password") as string | null;

      //   await new Promise((resolve) => setTimeout(resolve, 2000));

      if (name && password) {
        return { message: "Data Submitted", name, password };
      } else {
        return {
          error: "Failed to Submit. Enter Proper Data.",
          name: name ?? "",
          password: name ?? "",
        };
      }
    };
    const [data, action, pending] = useActionState(handleSubmit, undefined);
  return (
    <>
      <div className="heading-div">
        <h1 className="heading">Use Action</h1>
      </div>
      <Card className="cardforuniverse">
        <form action={action}>
          <input type="text" placeholder="Enter Name" name="name" />
          <br />
          <br />
          <input type="password" placeholder="Enter Password" name="password" />
          <br />
          <br />
          <button disabled={pending}>Submit Data</button>
        </form>

        {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
        {data?.message && (
          <span style={{ color: "green" }}>{data?.message}</span>
        )}
        <h3>Name: {data?.name}</h3>
        <h3>Password: {data?.password}</h3>
      </Card>
    </>
  );
}

export default UseAction;