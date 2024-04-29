const { makeWrapResolversPlugin } = require("graphile-utils");

// Create custom wrapper for resolver createProgram
const createProgramResolverWrapper = () => {
    return async (resolve, source, args, context, resolveInfo) => {
        // Log before the resolver executes
        console.info("Creating a new program...");
        console.info(args);

        // Execute the resolver against the database
        const result = await resolve();

        // Log after the resolver executes
        console.info("Program created:");
        console.info(result);

        return result;
    };
};

// Register custom resolvers
module.exports = makeWrapResolversPlugin({
    Mutation: {
        // Assuming createProgram is the correct mutation name in your GraphQL schema
        createProgram: createProgramResolverWrapper()
    }
});
