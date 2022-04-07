# NFID Account Linking demo

🚧 Work in progress!

There are two methods NFID delegates could link to your canisters’ existing user profiles.
One method is when your users add an “NFID device” to their existing anchors, which allows them to use NFID as the new frontend for their anchors and results in the same principals being generated as with II. We have already developed this approach and will wait until the community requests this to be released.

The other method is when your application provides a user flow to collect both the II and NFID delegates, and associates the principals from each to the same user profile. In this case, NFID remains completely separate from the user’s original anchor. This is the method we’ve chosen to implement.
Please check back next week for an update on the status of this example app (4/13).
