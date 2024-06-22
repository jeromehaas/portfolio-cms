import type { Schema, Attribute } from "@strapi/strapi";

export interface GeneralAddress extends Schema.Component {
    collectionName: "components_general_addresses";
    info: {
        displayName: "Address";
        icon: "house";
    };
    attributes: {
        name: Attribute.String & Attribute.Required;
        street: Attribute.String & Attribute.Required;
        plz: Attribute.String & Attribute.Required;
        town: Attribute.String & Attribute.Required;
        country: Attribute.String & Attribute.Required;
    };
}

export interface GeneralButton extends Schema.Component {
    collectionName: "components_general_buttons";
    info: {
        displayName: "Button";
        icon: "cursor";
    };
    attributes: {
        label: Attribute.String & Attribute.Required;
        href: Attribute.String & Attribute.Required;
    };
}

export interface GeneralCoordinates extends Schema.Component {
    collectionName: "components_general_coordinates";
    info: {
        displayName: "Coordinates";
        icon: "pinMap";
    };
    attributes: {
        latitude: Attribute.Float & Attribute.Required;
        longitude: Attribute.Float & Attribute.Required;
    };
}

export interface GeneralForm extends Schema.Component {
    collectionName: "components_general_forms";
    info: {
        displayName: "Form";
        icon: "file";
        description: "";
    };
    attributes: {
        inputs: Attribute.Component<"general.input", true> & Attribute.Required;
        button: Attribute.Component<"general.button"> & Attribute.Required;
        notification: Attribute.Component<"general.notification"> & Attribute.Required;
    };
}

export interface GeneralHistory extends Schema.Component {
    collectionName: "components_general_histories";
    info: {
        displayName: "History";
        icon: "clock";
        description: "";
    };
    attributes: {
        company: Attribute.String & Attribute.Required;
        role: Attribute.String & Attribute.Required;
        duration: Attribute.String & Attribute.Required;
        description: Attribute.Blocks & Attribute.Required;
        logo: Attribute.Component<"general.icon"> & Attribute.Required;
        reference: Attribute.Component<"general.button">;
    };
}

export interface GeneralIcon extends Schema.Component {
    collectionName: "components_general_icons";
    info: {
        displayName: "Icon";
        icon: "chartBubble";
        description: "";
    };
    attributes: {
        white: Attribute.Media<"images"> & Attribute.Required;
        black: Attribute.Media<"images"> & Attribute.Required;
    };
}

export interface GeneralInput extends Schema.Component {
    collectionName: "components_general_inputs";
    info: {
        displayName: "Input";
        icon: "information";
        description: "";
    };
    attributes: {
        field: Attribute.String & Attribute.Required;
        required: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
        pattern: Attribute.String & Attribute.Required;
        placeholder: Attribute.String & Attribute.Required;
        type: Attribute.Enumeration<["text", "textarea"]> & Attribute.Required & Attribute.DefaultTo<"text">;
        width: Attribute.Enumeration<["small", "large"]> & Attribute.Required & Attribute.DefaultTo<"large">;
    };
}

export interface GeneralInsight extends Schema.Component {
    collectionName: "components_general_insights";
    info: {
        displayName: "Insight";
        icon: "lightbulb";
    };
    attributes: {
        title: Attribute.String & Attribute.Required;
        value: Attribute.String & Attribute.Required;
    };
}

export interface GeneralNotification extends Schema.Component {
    collectionName: "components_general_notifications";
    info: {
        displayName: "Notification";
        icon: "discuss";
    };
    attributes: {
        success: Attribute.String & Attribute.Required;
        error: Attribute.String & Attribute.Required;
    };
}

export interface GeneralSong extends Schema.Component {
    collectionName: "components_general_songs";
    info: {
        displayName: "Song";
        icon: "music";
        description: "";
    };
    attributes: {
        title: Attribute.String & Attribute.Required;
        artist: Attribute.String & Attribute.Required;
        record: Attribute.Media<"audios"> & Attribute.Required;
    };
}

declare module "@strapi/types" {
    export module Shared {
        export interface Components {
            "general.address": GeneralAddress;
            "general.button": GeneralButton;
            "general.coordinates": GeneralCoordinates;
            "general.form": GeneralForm;
            "general.history": GeneralHistory;
            "general.icon": GeneralIcon;
            "general.input": GeneralInput;
            "general.insight": GeneralInsight;
            "general.notification": GeneralNotification;
            "general.song": GeneralSong;
        }
    }
}
