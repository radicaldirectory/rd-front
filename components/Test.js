import { gql, useQuery } from "@apollo/client";

export const TEST_QUERY = gql`
  query testQuery {
    groups {
      Name
      Description
    }
  }
`;

export default function Test() {
  const { loading, error, data } = useQuery(TEST_QUERY);

  if (error) return <div>Error loading groups.</div>;
  if (loading) return <div>Loading</div>;

  // data.groups.map((group) => console.log(group));
  // console.log(data);

  // const { groups: testQuery } = data;

  return (
    <>
      <p>Here are the groups:</p>
      {data.groups.map((group, key) => {
        console.log(group.Name);
        return <p key={key}>{group.Name}</p>;
      })}
    </>
  );
}
