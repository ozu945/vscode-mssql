export interface ProviderSettings {
    displayName: string;
    id: string;
    loginEndpoint: string;
    portalEndpoint: string;
    redirectUri: string;
    resources: ProviderResources;
}

export interface ProviderResources {
    windowsManagementResource: AADResource;
    azureManagementResource: AADResource;
    graphResource?: AADResource;
    databaseResource?: AADResource;
    ossRdbmsResource?: AADResource;
    azureKeyVaultResource?: AADResource;
    azureDevopsResource?: AADResource;
}

export interface AADResource {
    id: string;
    resource: string;
    endpoint: string;
}


export interface CredentialProvider {
    handle: number;

    saveCredential(credentialId: string, password: string): Thenable<boolean>;

    readCredential(credentialId: string): Thenable<Credential>;

    deleteCredential(credentialId: string): Thenable<boolean>;
}
