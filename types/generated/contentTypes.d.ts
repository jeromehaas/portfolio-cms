import type { Schema, Attribute } from "@strapi/strapi";

export interface AdminPermission extends Schema.CollectionType {
    collectionName: "admin_permissions";
    info: {
        name: "Permission";
        description: "";
        singularName: "permission";
        pluralName: "permissions";
        displayName: "Permission";
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        action: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
        subject: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        properties: Attribute.JSON & Attribute.DefaultTo<{}>;
        conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
        role: Attribute.Relation<"admin::permission", "manyToOne", "admin::role">;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"admin::permission", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"admin::permission", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface AdminUser extends Schema.CollectionType {
    collectionName: "admin_users";
    info: {
        name: "User";
        description: "";
        singularName: "user";
        pluralName: "users";
        displayName: "User";
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        firstname: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        lastname: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        username: Attribute.String;
        email: Attribute.Email &
            Attribute.Required &
            Attribute.Private &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        password: Attribute.Password &
            Attribute.Private &
            Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        resetPasswordToken: Attribute.String & Attribute.Private;
        registrationToken: Attribute.String & Attribute.Private;
        isActive: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
        roles: Attribute.Relation<"admin::user", "manyToMany", "admin::role"> & Attribute.Private;
        blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
        preferedLanguage: Attribute.String;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"admin::user", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"admin::user", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface AdminRole extends Schema.CollectionType {
    collectionName: "admin_roles";
    info: {
        name: "Role";
        description: "";
        singularName: "role";
        pluralName: "roles";
        displayName: "Role";
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        name: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        code: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        description: Attribute.String;
        users: Attribute.Relation<"admin::role", "manyToMany", "admin::user">;
        permissions: Attribute.Relation<"admin::role", "oneToMany", "admin::permission">;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"admin::role", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"admin::role", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface AdminApiToken extends Schema.CollectionType {
    collectionName: "strapi_api_tokens";
    info: {
        name: "Api Token";
        singularName: "api-token";
        pluralName: "api-tokens";
        displayName: "Api Token";
        description: "";
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        name: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        description: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }> &
            Attribute.DefaultTo<"">;
        type: Attribute.Enumeration<["read-only", "full-access", "custom"]> & Attribute.Required & Attribute.DefaultTo<"read-only">;
        accessKey: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        lastUsedAt: Attribute.DateTime;
        permissions: Attribute.Relation<"admin::api-token", "oneToMany", "admin::api-token-permission">;
        expiresAt: Attribute.DateTime;
        lifespan: Attribute.BigInteger;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"admin::api-token", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"admin::api-token", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
    collectionName: "strapi_api_token_permissions";
    info: {
        name: "API Token Permission";
        description: "";
        singularName: "api-token-permission";
        pluralName: "api-token-permissions";
        displayName: "API Token Permission";
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        action: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        token: Attribute.Relation<"admin::api-token-permission", "manyToOne", "admin::api-token">;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"admin::api-token-permission", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"admin::api-token-permission", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface AdminTransferToken extends Schema.CollectionType {
    collectionName: "strapi_transfer_tokens";
    info: {
        name: "Transfer Token";
        singularName: "transfer-token";
        pluralName: "transfer-tokens";
        displayName: "Transfer Token";
        description: "";
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        name: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        description: Attribute.String &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }> &
            Attribute.DefaultTo<"">;
        accessKey: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        lastUsedAt: Attribute.DateTime;
        permissions: Attribute.Relation<"admin::transfer-token", "oneToMany", "admin::transfer-token-permission">;
        expiresAt: Attribute.DateTime;
        lifespan: Attribute.BigInteger;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"admin::transfer-token", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"admin::transfer-token", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
    collectionName: "strapi_transfer_token_permissions";
    info: {
        name: "Transfer Token Permission";
        description: "";
        singularName: "transfer-token-permission";
        pluralName: "transfer-token-permissions";
        displayName: "Transfer Token Permission";
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        action: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 1;
            }>;
        token: Attribute.Relation<"admin::transfer-token-permission", "manyToOne", "admin::transfer-token">;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"admin::transfer-token-permission", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"admin::transfer-token-permission", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface PluginUploadFile extends Schema.CollectionType {
    collectionName: "files";
    info: {
        singularName: "file";
        pluralName: "files";
        displayName: "File";
        description: "";
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        name: Attribute.String & Attribute.Required;
        alternativeText: Attribute.String;
        caption: Attribute.String;
        width: Attribute.Integer;
        height: Attribute.Integer;
        formats: Attribute.JSON;
        hash: Attribute.String & Attribute.Required;
        ext: Attribute.String;
        mime: Attribute.String & Attribute.Required;
        size: Attribute.Decimal & Attribute.Required;
        url: Attribute.String & Attribute.Required;
        previewUrl: Attribute.String;
        provider: Attribute.String & Attribute.Required;
        provider_metadata: Attribute.JSON;
        related: Attribute.Relation<"plugin::upload.file", "morphToMany">;
        folder: Attribute.Relation<"plugin::upload.file", "manyToOne", "plugin::upload.folder"> & Attribute.Private;
        folderPath: Attribute.String &
            Attribute.Required &
            Attribute.Private &
            Attribute.SetMinMax<
                {
                    min: 1;
                },
                number
            >;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"plugin::upload.file", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"plugin::upload.file", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface PluginUploadFolder extends Schema.CollectionType {
    collectionName: "upload_folders";
    info: {
        singularName: "folder";
        pluralName: "folders";
        displayName: "Folder";
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        name: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMax<
                {
                    min: 1;
                },
                number
            >;
        pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
        parent: Attribute.Relation<"plugin::upload.folder", "manyToOne", "plugin::upload.folder">;
        children: Attribute.Relation<"plugin::upload.folder", "oneToMany", "plugin::upload.folder">;
        files: Attribute.Relation<"plugin::upload.folder", "oneToMany", "plugin::upload.file">;
        path: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMax<
                {
                    min: 1;
                },
                number
            >;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"plugin::upload.folder", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"plugin::upload.folder", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
    collectionName: "strapi_releases";
    info: {
        singularName: "release";
        pluralName: "releases";
        displayName: "Release";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        name: Attribute.String & Attribute.Required;
        releasedAt: Attribute.DateTime;
        scheduledAt: Attribute.DateTime;
        timezone: Attribute.String;
        status: Attribute.Enumeration<["ready", "blocked", "failed", "done", "empty"]> & Attribute.Required;
        actions: Attribute.Relation<"plugin::content-releases.release", "oneToMany", "plugin::content-releases.release-action">;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"plugin::content-releases.release", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"plugin::content-releases.release", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface PluginContentReleasesReleaseAction extends Schema.CollectionType {
    collectionName: "strapi_release_actions";
    info: {
        singularName: "release-action";
        pluralName: "release-actions";
        displayName: "Release Action";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        type: Attribute.Enumeration<["publish", "unpublish"]> & Attribute.Required;
        entry: Attribute.Relation<"plugin::content-releases.release-action", "morphToOne">;
        contentType: Attribute.String & Attribute.Required;
        locale: Attribute.String;
        release: Attribute.Relation<"plugin::content-releases.release-action", "manyToOne", "plugin::content-releases.release">;
        isEntryValid: Attribute.Boolean;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"plugin::content-releases.release-action", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"plugin::content-releases.release-action", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface PluginI18NLocale extends Schema.CollectionType {
    collectionName: "i18n_locale";
    info: {
        singularName: "locale";
        pluralName: "locales";
        collectionName: "locales";
        displayName: "Locale";
        description: "";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        name: Attribute.String &
            Attribute.SetMinMax<
                {
                    min: 1;
                    max: 50;
                },
                number
            >;
        code: Attribute.String & Attribute.Unique;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"plugin::i18n.locale", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"plugin::i18n.locale", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface PluginUsersPermissionsPermission extends Schema.CollectionType {
    collectionName: "up_permissions";
    info: {
        name: "permission";
        description: "";
        singularName: "permission";
        pluralName: "permissions";
        displayName: "Permission";
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        action: Attribute.String & Attribute.Required;
        role: Attribute.Relation<"plugin::users-permissions.permission", "manyToOne", "plugin::users-permissions.role">;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"plugin::users-permissions.permission", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"plugin::users-permissions.permission", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
    collectionName: "up_roles";
    info: {
        name: "role";
        description: "";
        singularName: "role";
        pluralName: "roles";
        displayName: "Role";
    };
    pluginOptions: {
        "content-manager": {
            visible: false;
        };
        "content-type-builder": {
            visible: false;
        };
    };
    attributes: {
        name: Attribute.String &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 3;
            }>;
        description: Attribute.String;
        type: Attribute.String & Attribute.Unique;
        permissions: Attribute.Relation<"plugin::users-permissions.role", "oneToMany", "plugin::users-permissions.permission">;
        users: Attribute.Relation<"plugin::users-permissions.role", "oneToMany", "plugin::users-permissions.user">;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"plugin::users-permissions.role", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"plugin::users-permissions.role", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
    collectionName: "up_users";
    info: {
        name: "user";
        description: "";
        singularName: "user";
        pluralName: "users";
        displayName: "User";
    };
    options: {
        draftAndPublish: false;
        timestamps: true;
    };
    attributes: {
        username: Attribute.String &
            Attribute.Required &
            Attribute.Unique &
            Attribute.SetMinMaxLength<{
                minLength: 3;
            }>;
        email: Attribute.Email &
            Attribute.Required &
            Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        provider: Attribute.String;
        password: Attribute.Password &
            Attribute.Private &
            Attribute.SetMinMaxLength<{
                minLength: 6;
            }>;
        resetPasswordToken: Attribute.String & Attribute.Private;
        confirmationToken: Attribute.String & Attribute.Private;
        confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
        blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
        role: Attribute.Relation<"plugin::users-permissions.user", "manyToOne", "plugin::users-permissions.role">;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"plugin::users-permissions.user", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"plugin::users-permissions.user", "oneToOne", "admin::user"> & Attribute.Private;
    };
}

export interface ApiActivityActivity extends Schema.SingleType {
    collectionName: "activities";
    info: {
        singularName: "activity";
        pluralName: "activities";
        displayName: "Activity";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        title: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        events: Attribute.JSON &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::activity.activity", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::activity.activity", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::activity.activity", "oneToMany", "api::activity.activity">;
        locale: Attribute.String;
    };
}

export interface ApiAddressAddress extends Schema.SingleType {
    collectionName: "addresses";
    info: {
        singularName: "address";
        pluralName: "addresses";
        displayName: "Address";
        description: "";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        title: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        info: Attribute.Component<"general.address"> &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::address.address", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::address.address", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::address.address", "oneToMany", "api::address.address">;
        locale: Attribute.String;
    };
}

export interface ApiBoringLinkBoringLink extends Schema.SingleType {
    collectionName: "boring_links";
    info: {
        singularName: "boring-link";
        pluralName: "boring-links";
        displayName: "Boring Links";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        title: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        links: Attribute.Component<"general.button", true> &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::boring-link.boring-link", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::boring-link.boring-link", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::boring-link.boring-link", "oneToMany", "api::boring-link.boring-link">;
        locale: Attribute.String;
    };
}

export interface ApiCurriculumVitaeCurriculumVitae extends Schema.SingleType {
    collectionName: "curriculum_vitaes";
    info: {
        singularName: "curriculum-vitae";
        pluralName: "curriculum-vitaes";
        displayName: "Curriculum Vitae";
        description: "";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        title: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        text: Attribute.Text &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        button: Attribute.Component<"general.button"> &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::curriculum-vitae.curriculum-vitae", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::curriculum-vitae.curriculum-vitae", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::curriculum-vitae.curriculum-vitae", "oneToMany", "api::curriculum-vitae.curriculum-vitae">;
        locale: Attribute.String;
    };
}

export interface ApiDataPrivacyDataPrivacy extends Schema.SingleType {
    collectionName: "data_privacies";
    info: {
        singularName: "data-privacy";
        pluralName: "data-privacies";
        displayName: "Data Privacy";
        description: "";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        title: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        articles: Attribute.Component<"general.article", true> &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        button: Attribute.Component<"general.button"> &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::data-privacy.data-privacy", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::data-privacy.data-privacy", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::data-privacy.data-privacy", "oneToMany", "api::data-privacy.data-privacy">;
        locale: Attribute.String;
    };
}

export interface ApiErrorError extends Schema.SingleType {
    collectionName: "errors";
    info: {
        singularName: "error";
        pluralName: "errors";
        displayName: "Error";
        description: "";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        peaker: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        title: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        text: Attribute.Text &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        button: Attribute.Component<"general.button"> &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::error.error", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::error.error", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::error.error", "oneToMany", "api::error.error">;
        locale: Attribute.String;
    };
}

export interface ApiExperienceExperience extends Schema.SingleType {
    collectionName: "experiences";
    info: {
        singularName: "experience";
        pluralName: "experiences";
        displayName: "Experience";
        description: "";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        title: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        history: Attribute.Component<"general.history", true> &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::experience.experience", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::experience.experience", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::experience.experience", "oneToMany", "api::experience.experience">;
        locale: Attribute.String;
    };
}

export interface ApiFeaturedProjectFeaturedProject extends Schema.SingleType {
    collectionName: "featured_projects";
    info: {
        singularName: "featured-project";
        pluralName: "featured-projects";
        displayName: "Featured Projects";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        title: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        projects: Attribute.Component<"general.project", true> &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::featured-project.featured-project", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::featured-project.featured-project", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::featured-project.featured-project", "oneToMany", "api::featured-project.featured-project">;
        locale: Attribute.String;
    };
}

export interface ApiImprintImprint extends Schema.SingleType {
    collectionName: "imprints";
    info: {
        singularName: "imprint";
        pluralName: "imprints";
        displayName: "Imprint";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        title: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        contributors: Attribute.Component<"general.contributor", true> &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        button: Attribute.Component<"general.button"> &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::imprint.imprint", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::imprint.imprint", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::imprint.imprint", "oneToMany", "api::imprint.imprint">;
        locale: Attribute.String;
    };
}

export interface ApiIntroductionIntroduction extends Schema.SingleType {
    collectionName: "introductions";
    info: {
        singularName: "introduction";
        pluralName: "introductions";
        displayName: "Introduction";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        title: Attribute.Blocks &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        text: Attribute.Blocks &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::introduction.introduction", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::introduction.introduction", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::introduction.introduction", "oneToMany", "api::introduction.introduction">;
        locale: Attribute.String;
    };
}

export interface ApiLocationLocation extends Schema.SingleType {
    collectionName: "locations";
    info: {
        singularName: "location";
        pluralName: "locations";
        displayName: "Location";
        description: "";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        coordinates: Attribute.Component<"general.coordinates"> &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::location.location", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::location.location", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::location.location", "oneToMany", "api::location.location">;
        locale: Attribute.String;
    };
}

export interface ApiMetadataMetadata extends Schema.SingleType {
    collectionName: "metadatas";
    info: {
        singularName: "metadata";
        pluralName: "metadatas";
        displayName: "Metadata";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        title: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        description: Attribute.Text &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        image: Attribute.Media<"images"> &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::metadata.metadata", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::metadata.metadata", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::metadata.metadata", "oneToMany", "api::metadata.metadata">;
        locale: Attribute.String;
    };
}

export interface ApiOnRepeatOnRepeat extends Schema.SingleType {
    collectionName: "on_repeats";
    info: {
        singularName: "on-repeat";
        pluralName: "on-repeats";
        displayName: "On Repeat";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        title: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        song: Attribute.Component<"general.song"> &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::on-repeat.on-repeat", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::on-repeat.on-repeat", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::on-repeat.on-repeat", "oneToMany", "api::on-repeat.on-repeat">;
        locale: Attribute.String;
    };
}

export interface ApiQuoteQuote extends Schema.SingleType {
    collectionName: "quotes";
    info: {
        singularName: "quote";
        pluralName: "quotes";
        displayName: "Quote";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        content: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        author: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::quote.quote", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::quote.quote", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::quote.quote", "oneToMany", "api::quote.quote">;
        locale: Attribute.String;
    };
}

export interface ApiSayHelloSayHello extends Schema.SingleType {
    collectionName: "say_hellos";
    info: {
        singularName: "say-hello";
        pluralName: "say-hellos";
        displayName: "Say Hello";
        description: "";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        title: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        text: Attribute.Text &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        form: Attribute.Component<"general.form"> &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::say-hello.say-hello", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::say-hello.say-hello", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::say-hello.say-hello", "oneToMany", "api::say-hello.say-hello">;
        locale: Attribute.String;
    };
}

export interface ApiStatisticStatistic extends Schema.SingleType {
    collectionName: "statistics";
    info: {
        singularName: "statistic";
        pluralName: "statistics";
        displayName: "Statistics";
        description: "";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        title: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        insights: Attribute.Component<"general.insight", true> &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::statistic.statistic", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::statistic.statistic", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::statistic.statistic", "oneToMany", "api::statistic.statistic">;
        locale: Attribute.String;
    };
}

export interface ApiTechStackTechStack extends Schema.SingleType {
    collectionName: "tech_stacks";
    info: {
        singularName: "tech-stack";
        pluralName: "tech-stacks";
        displayName: "Tech-Stack";
        description: "";
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        i18n: {
            localized: true;
        };
    };
    attributes: {
        title: Attribute.String &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        devicons: Attribute.Component<"general.icon", true> &
            Attribute.Required &
            Attribute.SetPluginOptions<{
                i18n: {
                    localized: false;
                };
            }>;
        createdAt: Attribute.DateTime;
        updatedAt: Attribute.DateTime;
        createdBy: Attribute.Relation<"api::tech-stack.tech-stack", "oneToOne", "admin::user"> & Attribute.Private;
        updatedBy: Attribute.Relation<"api::tech-stack.tech-stack", "oneToOne", "admin::user"> & Attribute.Private;
        localizations: Attribute.Relation<"api::tech-stack.tech-stack", "oneToMany", "api::tech-stack.tech-stack">;
        locale: Attribute.String;
    };
}

declare module "@strapi/types" {
    export module Shared {
        export interface ContentTypes {
            "admin::permission": AdminPermission;
            "admin::user": AdminUser;
            "admin::role": AdminRole;
            "admin::api-token": AdminApiToken;
            "admin::api-token-permission": AdminApiTokenPermission;
            "admin::transfer-token": AdminTransferToken;
            "admin::transfer-token-permission": AdminTransferTokenPermission;
            "plugin::upload.file": PluginUploadFile;
            "plugin::upload.folder": PluginUploadFolder;
            "plugin::content-releases.release": PluginContentReleasesRelease;
            "plugin::content-releases.release-action": PluginContentReleasesReleaseAction;
            "plugin::i18n.locale": PluginI18NLocale;
            "plugin::users-permissions.permission": PluginUsersPermissionsPermission;
            "plugin::users-permissions.role": PluginUsersPermissionsRole;
            "plugin::users-permissions.user": PluginUsersPermissionsUser;
            "api::activity.activity": ApiActivityActivity;
            "api::address.address": ApiAddressAddress;
            "api::boring-link.boring-link": ApiBoringLinkBoringLink;
            "api::curriculum-vitae.curriculum-vitae": ApiCurriculumVitaeCurriculumVitae;
            "api::data-privacy.data-privacy": ApiDataPrivacyDataPrivacy;
            "api::error.error": ApiErrorError;
            "api::experience.experience": ApiExperienceExperience;
            "api::featured-project.featured-project": ApiFeaturedProjectFeaturedProject;
            "api::imprint.imprint": ApiImprintImprint;
            "api::introduction.introduction": ApiIntroductionIntroduction;
            "api::location.location": ApiLocationLocation;
            "api::metadata.metadata": ApiMetadataMetadata;
            "api::on-repeat.on-repeat": ApiOnRepeatOnRepeat;
            "api::quote.quote": ApiQuoteQuote;
            "api::say-hello.say-hello": ApiSayHelloSayHello;
            "api::statistic.statistic": ApiStatisticStatistic;
            "api::tech-stack.tech-stack": ApiTechStackTechStack;
        }
    }
}
