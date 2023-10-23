import LoadingScreen from "../../LoadingScreen";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoards } from "../../../Services/boardsService";
import Navbar from "../../Navbar";
import {
  Container,
  Wrapper,
  Title,
  BoardContainer,
  Board,
  AddBoard,
  ProjectTitle,
  ProjectInfoContainer,
} from "./Styled";
import CreateBoard from "../../Modals/CreateBoardModal/CreateBoard";
import ProjectBoard from "../../ProjectBoard.jsx";
import { useNavigate } from "react-router";
import { ConfirmProvider } from "material-ui-confirm";

const Boards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { pending, boardsData } = useSelector((state) => state.boards);
  const [openModal, setOpenModal] = useState(false);
  const [searchString, setSearchString] = useState("");
  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleClick = (id) => {
    navigate(`/board/${id}`);
  };

  useEffect(() => {
    if (!user.isAuthenticated) navigate("/");
  }, []);

  useEffect(() => {
    getBoards(false, dispatch);
  }, [dispatch]);

  useEffect(() => {
    document.title = "Boards | Codernative";
  }, []);

  console.log(boardsData);

  return (
    <>
      {user.isAuthenticated && !user.pending ? (
        <>
          {pending && <LoadingScreen />}
          <Container>
            <Navbar
              searchString={searchString}
              setSearchString={setSearchString}
            />
            <Wrapper>
              <Title>Your Projects</Title>
              {!pending &&
                boardsData.length > 0 &&
                boardsData
                  .filter((item) =>
                    searchString
                      ? item.title
                          .toLowerCase()
                          .includes(searchString.toLowerCase())
                      : true
                  )
                  .map((item) => {
                    const owner = item.members?.filter(
                      (member) => member.role === "owner"
                    );
                    console.log(owner);
                    return (
                      // <BoardContainer>
                      //   <Board
                      //     key={item._id}
                      //     link={item.backgroundImageLink}
                      //     isImage={item.isImage}
                      //     id={item._id}
                      //     onClick={(e) => handleClick(e)}
                      //   />
                      //   <ProjectInfoContainer>
                      //     <ProjectTitle>{item.title}</ProjectTitle>
                      //     <ProjectTitle>{item.title}</ProjectTitle>
                      //   </ProjectInfoContainer>
                      // </BoardContainer>
                      <ConfirmProvider
                        defaultOptions={{
                          confirmationButtonProps: { autoFocus: true },
                        }}
                      >
                        <ProjectBoard
                          id={item._id}
                          key={item._id}
                          title={item.title}
                          updateDate={item.updatedAt}
                          image={item.backgroundImageLink}
                          owner={owner && owner[0]}
                          members={item.members}
                          lists={item.lists}
                          onClick={(e) => handleClick(item._id)}
                        />
                      </ConfirmProvider>
                    );
                  })}
              {!pending && (
                <BoardContainer>
                  <AddBoard onClick={() => setOpenModal(true)}>
                    Create new Project
                  </AddBoard>
                </BoardContainer>
              )}
              {openModal && <CreateBoard callback={handleModalClose} />}
            </Wrapper>
          </Container>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Boards;
