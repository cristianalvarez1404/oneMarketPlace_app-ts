
const accountRoles = ['client', 'freelancer'] as const;
type AccountRole = (typeof accountRoles)[number];

interface CachedAccountAuth {
  userId: string;
  role: "client" | "freelancer";
  accountExists: boolean;
  isOnboarded: boolean;
}

const isAccountRole = (value: unknown): value is AccountRole => typeof value === "string" && accountRoles.some((accountRoles) => accountRoles === value);

const getBearerToken = (authorizationHeader: string | undefined) => {
  if(!authorizationHeader?.startsWith("Bearer ")){
    return null;
  }

  const token = authorizationHeader?.slice("Bearer ".length).trim();
  return token || null;
}

export const isAuthenticated: RequestHandler = asyncHandler(
  async(request, _response, next){
    
  }
) 