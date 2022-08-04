import { useState } from "react";
import LSidebar from "./Sidebar/Left/LSidebar";
import RSidebar from "./Sidebar/Right/RSidebar";
import MessageContainer from "./Main/MessageContainer";
import NoConversation from "./NoConversation/NoConversation";
import { Routes, Route } from "react-router-dom";
import "./main.scss";
import Modal from "./Modal/Modal";

function Main() {
  const [show, setshow] = useState(false);
  const [newcontact, setnewcontact] = useState([]);

  return (
    <section>
      <Modal
        show={show}
        setshow={setshow}
        newcontact={newcontact}
        setnewcontact={setnewcontact}
      />
      <LSidebar setshow={setshow} newcontact={newcontact} />
      <Routes>
        <Route path="chat/:userId" element={<MessageContainer show={show} />}/>
        <Route path="/" element={<NoConversation />} exact="true" />
      </Routes>
      <Routes>
        <Route path="chat/:userId" element={<RSidebar />} />
      </Routes>
    </section>
  );
}

export default Main;
