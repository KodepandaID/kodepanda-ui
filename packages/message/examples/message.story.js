import React from "react";
import { Message } from "../index";
import { List } from "../../list";

export default {
  title: 'Message',
  component: Message,
};

export const basic = () => (
  <Message header="Changes in Service" description="We just updated our privacy policy here to better service our customers. We recommend reviewing the changes." />
)

export const rounded = () => (
  <Message rounded="md" header="Changes in Service" description="We just updated our privacy policy here to better service our customers. We recommend reviewing the changes." />
)

export const icon = () => (
  <Message icon="inbox-in" header="Have you heard about our mailing list?" description="Get the best news in your e-mail every day." />
)

export const customDescription = () => (
  <Message header="New Site Features">
    <List type="disc">
      <List.Item>You can now have cover images on blog pages</List.Item>
      <List.Item>Drafts will now auto-save while writing</List.Item>
    </List>
  </Message>
)

export const coloring = () => (
  <Message color="red" colorContrast={600} textColor="white" border={false} header="Changes in Service" description="We just updated our privacy policy here to better service our customers. We recommend reviewing the changes." />
)

export const closable = () => (
  <Message header="Changes in Service" description="We just updated our privacy policy here to better service our customers. We recommend reviewing the changes."
  closable onClose={() => console.log("close")} />
)

export const responsiveWidth = () => (
  <Message 
  widthLG="1/2" widthMD="full"
  header="Changes in Service" description="We just updated our privacy policy here to better service our customers. We recommend reviewing the changes." />
)
