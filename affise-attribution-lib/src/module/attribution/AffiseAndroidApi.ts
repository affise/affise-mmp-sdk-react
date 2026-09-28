export interface AffiseAndroidApi { 
    /**
     * Erases all user data from mobile and sends [GDPREvent]
     */
    forget(userData: string): void;

    crashApplication(): void;
}