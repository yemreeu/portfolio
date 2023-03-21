import React from "react";
import { Formik, Field, Form } from "formik";
import { Textarea } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "./style.scss";


function Contact() {
  return (
    <div className="contact">
      
      <h1 id="contact__header">Contact Me!</h1>
      <br />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field
          
            className="contact__elements"
            id="firstName"
            name="firstName"
            placeholder="Name"
            bordercolor="black"
          />

          <Field
            className="contact__elements"
            id="lastName"
            name="lastName"
            placeholder="Surname"
          />

          <Field
            className="contact__elements"
            id="email"
            name="email"
            placeholder="Email address"
            type="email"
          />
        </Form>
      </Formik>

      <Textarea
      height={"200"}
        id="text"
        borderColor={"cyan"}
        placeholder="Type your message here"
      />
      <br />
      <br />
      <Button type="submit" colorScheme="cyan" size="sm">
        Send message
      </Button>
    </div>
  );
}

export default Contact;
