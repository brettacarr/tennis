# Tennis WIP

## To run:
npm install

node -e 'require("./src/cli").main("./test/resources/full_tournament.txt")'

## Notes

Used a classic approach (Detroit) to TDD.

Used Object Oriented rather than functional approach to the problem and used a rich domain model to encapsulate logic. The Tournament, Match, Set & Game have the core logic.

Still some work to be done to improve design. The Match is doing a lot of the heavy lifting, some of this should be pushed into Set as it's anemic at the moment.

Tries to encapsulate all tennis based logic into the domain objects however to process the data file into the domain model, some knowledge needed to be known by the file processor E.g splitting into games. I wanted to keep the domain model isolated from how the data was being stored.

No all scenarios have been completed. 
