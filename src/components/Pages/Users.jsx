import { SearchInput } from "../molucules/SearchInput";
import { UserCard } from "../organisms/UserCard";
import styled from "styled-components";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/yqL-06P89Hg",
    name: `ore${val}`,
    mail: "xxxxxxxxxxx.com",
    phone: "00120-828-828",
    company: {
      name: "XXXX株式会社"
    },
    web: "https://google.com"
  };
});

export const User = () => {
  return (
    <SContainer>
      <h2>User一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1px));
  grid-gap: 20px;
`;
