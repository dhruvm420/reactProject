import VerifyAction from "./verifyAction";
import DeleteAction from "./deleteAction";
import EditAction from "./editAction";
import MenuAction from "./menuAction";
export default function ActionPopUp({
  action,
  formName,
  modifyId,
  isOpen,
  setIsOpen,
}) {
  function closeHandler() {
    setIsOpen(!isOpen);
  }

  if (action === "menu")
    return (
      <MenuAction
        isOpen={isOpen}
        closeHandler={closeHandler}
        modifyId={modifyId}
        setIsOpen={setIsOpen}
        formName={formName}
      />
    );
  if (action === "edit")
    return (
      <EditAction
        isOpen={isOpen}
        closeHandler={closeHandler}
        modifyId={modifyId}
        formName={formName}
      />
    );
  if (action === "verify")
    return (
      <VerifyAction
        isOpen={isOpen}
        closeHandler={closeHandler}
        modifyId={modifyId}
        setIsOpen={setIsOpen}
      />
    );
  if (action === "delete")
    return (
      <DeleteAction
        isOpen={isOpen}
        closeHandler={closeHandler}
        modifyId={modifyId}
        setIsOpen={setIsOpen}
        formName={formName}
      />
    );
  return <></>;
}
