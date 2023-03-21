import React from "react";
import "./style.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Copyright &copy; {new Date().getFullYear()} Yunus Emre Uyanık </p>
    </footer>
  );
}