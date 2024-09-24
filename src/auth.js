import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db, accounts,users, sessions, verificationTokens } from "@/db/schema"
import { database } from "@/db/database"

export const {handlers, signIn, signOut, auth} = NextAuth({
  adapter: DrizzleAdapter(database, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [Google],
})


// import NextAuth from "next-auth"
// import Google from "next-auth/providers/google"
// import { DrizzleAdapter } from "@auth/drizzle-adapter"
// import { database } from "@/db/database"
// import { db,accounts,users,sessions,verificationTokens } from "./db/schema"
//   export const { handlers, signIn, signOut, auth } = NextAuth({
//   adapter: DrizzleAdapter(database, {
//     usersTable: users,
//     accountsTable: accounts,
//     sessionsTable: sessions,
//     verificationTokensTable: verificationTokens,
//   }),
//   providers: [Google],

// })






