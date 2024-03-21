import React from "react"

const AddTest = () => {
  return (
    <div>
      Add Test Form
      
      Collection: tests
        - Document: [Test ID]
            - testType
            - total
            - Score
            - Rank
            - Correct
            - Incorrect
            - Skipped
            - Accuracy
            - Completed
            - Time Taken
            - Percentile
            - Collection: subjects
            - Document: Physics
                - total
                - score
                - correct
                - incorrect
                - skipped
                - accuracy
                - time taken
                - Collection: chapters
                - Document: [Chapter ID]
                    - total
                    - score
                    - correct
                    - incorrect
                    - skipped
                    - accuracy
                    - time taken
            - Collection: weakChapters
            - Document: [Chapter ID]
                - // Chapter details
            - Collection: averageChapters
            - Document: [Chapter ID]
                - // Chapter details
            - Collection: strongChapters
            - Document: [Chapter ID]
                - // Chapter details

    </div>
  )
};

export default AddTest;
