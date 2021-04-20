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

  console.log(data);

  const { groups: testQuery } = data;

  return (
    // {groups.map((group) => (
    // <p>{group.name}</p>))}
    <p>hello</p>
  );
}
