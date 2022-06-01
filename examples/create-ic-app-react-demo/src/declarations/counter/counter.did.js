export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getValue' : IDL.Func([], [IDL.Nat], ['query']),
    'increment' : IDL.Func([], [], []),
    'whoami' : IDL.Func([], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
