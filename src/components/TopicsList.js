import React from "react";
import { gql, useQuery } from "@apollo/client";
import TopicNode from "./TopicNode";

const GET_TOPICS_LIST = gql`
  query {
    search(query: "topic=react", type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          repositoryTopics(first: 10) {
            nodes {
              topic {
                name
                stargazerCount
                relatedTopics(first: 10) {
                  name
                  stargazerCount
                }
              }
            }
          }
        }
      }
    }
  }
`;

const TopicsList = ({}) => {
  const { loading, error, data } = useQuery(GET_TOPICS_LIST);

  if (loading) return null;
  if (error) return `Error! ${error}`;
  return (
    <div>
      {data &&
        data.search.nodes.map((node, index) => (
          <div key={index}>
            {node.repositoryTopics.nodes.map((node, index1) => (
              <TopicNode node={node} key={index1}></TopicNode>
            ))}
          </div>
        ))}
      {data && data.search.nodes.length === 0 && (
        <div className="no-data-text">No topics found.</div>
      )}
    </div>
  );
};
export default TopicsList;
