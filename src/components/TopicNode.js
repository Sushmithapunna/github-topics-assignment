import React, { useState } from "react";
import "./TopicNode.css";

const TopicNode = ({ node }) => {
  const [openRelatedTopics, setOpenRelatedTopics] = useState(false);

  return (
    <>
      <div className="topic" onClick={() => setOpenRelatedTopics(true)}>
        <div className="name">{node.topic.name}</div>
        <div className="star-count">{node.topic.stargazerCount}</div>
      </div>
      {openRelatedTopics && (
        <div className="related-topics">
          <div className="related-topics-header">
            <h3>Related Topics</h3>
            <button
              className="close-btn"
              onClick={() => setOpenRelatedTopics(false)}
            >
              Close
            </button>
          </div>
          <div>
            {node.topic.relatedTopics.map((relatedTopic, index) => (
              <div className="topic" key={index}>
                <div className="name">{relatedTopic.name}</div>
                <div className="star-count">{relatedTopic.stargazerCount}</div>
              </div>
            ))}
            {node.topic.relatedTopics.length === 0 && (
              <div>No related topics found.</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TopicNode;
