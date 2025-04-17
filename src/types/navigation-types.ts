import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  SplashScreen: undefined;
  Onboarding: RouteProp<OnboardingStackParamList> | undefined;
  Auth: RouteProp<AuthStackParamList> | undefined;
  Social: RouteProp<SocialStackParamList> | undefined;
  Profile: RouteProp<ProfileStackParamList> | undefined;
  Finance: RouteProp<FinanceStackParamList> | undefined;
  Food: RouteProp<FoodStackParamList> | undefined;
  FitnessHealth: RouteProp<FitnessHealthStackParamList> | undefined;
};

export type OnboardingStackParamList = {
  OnboardingIntro: undefined;
  Onboarding01: undefined;
  Onboarding02: undefined;
  Onboarding03: undefined;
  Onboarding04: undefined;
  Onboarding05: undefined;
  Onboarding06: undefined;
  Onboarding07: undefined;
  Onboarding08: undefined;
  Onboarding09: undefined;
  Onboarding10: undefined;
  Onboarding11: undefined;
};

export type AuthStackParamList = {
  AuthIntro: undefined;
  Auth01: undefined;
  Auth02: undefined;
  Auth03: undefined;
  Auth04: undefined;
  Auth05: undefined;
  Auth06: undefined;
  Auth07: undefined;
  Auth08: undefined;
  Auth09: undefined;
  Auth10: undefined;
};

export type SocialStackParamList = {
  SocialIntro: undefined;
  Social01: undefined;
  Social02: undefined;
  Social03: undefined;
  Social04: undefined;
  Social05: undefined;
  Social06: undefined;
  Social07: undefined;
  Social08: undefined;
  Social09: undefined;
  Social10: undefined;
  Social11: undefined;
  Social12: undefined;
  Social13: undefined;
  Social14: undefined;
};

export type ProfileStackParamList = {
  ProfileIntro: undefined;
  Profile01: undefined;
  Profile02: undefined;
  Profile03: undefined;
  Profile04: undefined;
  Profile05: undefined;
  Profile06: undefined;
  Profile07: undefined;
  Profile08: undefined;
  Profile09: undefined;
  Profile10: undefined;
  Profile11: undefined;
};

export type FinanceStackParamList = {
  FinanceIntro: undefined;
  Finance01: undefined;
  Finance02: undefined;
  Finance03: undefined;
  Finance04: undefined;
  Finance05: undefined;
  Finance06: undefined;
  Finance07: undefined;
  Finance08: undefined;
  Finance09: undefined;
  Finance10: undefined;
};
export type FoodStackParamList = {
  FoodIntro: undefined;
  Food01: undefined;
  Food02: undefined;
  Food03: undefined;
  Food04: undefined;
  Food05: undefined;
  Food06: undefined;
  Food07: undefined;
  Food08: undefined;
  Food09: undefined;
  Food10: undefined;
};
export type FitnessHealthStackParamList = {
  FitnessHealthIntro: undefined;
  FitnessHealth01: undefined;
  FitnessHealth02: undefined;
  FitnessHealth03: undefined;
  FitnessHealth04: undefined;
  FitnessHealth05: undefined;
  FitnessHealth06: undefined;
  FitnessHealth07: undefined;
  FitnessHealth08: undefined;
  FitnessHealth09: undefined;
  FitnessHealth10: undefined;
};
