import {
    AchieveLevelEvent,
    AddPaymentInfoEvent,
    AddToCartEvent,
    AddToWishlistEvent,
    AdRevenueEvent,
    AffiseAdSource,
    AffiseEvent,
    ClickAdvEvent,
    CompleteRegistrationEvent,
    CompleteStreamEvent,
    CompleteTrialEvent,
    CompleteTutorialEvent,
    ContactEvent,
    ContentItemsViewEvent,
    ConvertedOfferEvent,
    ConvertedOfferFromRetryEvent,
    ConvertedTrialEvent,
    ConvertedTrialFromRetryEvent,
    CustomId01Event,
    CustomId02Event,
    CustomId03Event,
    CustomId04Event,
    CustomId05Event,
    CustomId06Event,
    CustomId07Event,
    CustomId08Event,
    CustomId09Event,
    CustomId10Event,
    CustomizeProductEvent,
    DeepLinkedEvent,
    DonateEvent,
    FailedOfferFromRetryEvent,
    FailedOfferiseEvent,
    FailedSubscriptionEvent,
    FailedSubscriptionFromRetryEvent,
    FailedTrialEvent,
    FailedTrialFromRetryEvent,
    FindLocationEvent,
    InitialOfferEvent,
    InitialSubscriptionEvent,
    InitialTrialEvent,
    InitiateCheckoutEvent,
    InitiatePurchaseEvent,
    InitiateStreamEvent,
    InviteEvent,
    LastAttributedTouchEvent,
    LeadEvent,
    ListViewEvent,
    LoginEvent,
    OfferInRetryEvent,
    OpenedFromPushNotificationEvent,
    OrderCancelEvent,
    OrderEvent,
    OrderItemAddedEvent,
    OrderItemRemoveEvent,
    OrderReturnRequestCancelEvent,
    OrderReturnRequestEvent,
    PredefinedFloat,
    PredefinedListObject,
    PredefinedListString,
    PredefinedLong,
    PredefinedObject,
    PredefinedString,
    PurchaseEvent,
    RateEvent,
    ReactivatedSubscriptionEvent,
    ReEngageEvent,
    RenewedSubscriptionEvent,
    RenewedSubscriptionFromRetryEvent,
    ReserveEvent,
    SalesEvent,
    ScheduleEvent,
    SearchEvent,
    ShareEvent,
    SpendCreditsEvent,
    StartRegistrationEvent,
    StartTrialEvent,
    StartTutorialEvent,
    SubmitApplicationEvent,
    SubscribeEvent,
    SubscriptionInRetryEvent,
    TouchType,
    TravelBookingEvent,
    TrialInRetryEvent,
    UnlockAchievementEvent,
    UnsubscribeEvent,
    UnsubscriptionEvent,
    UpdateEvent,
    ViewAdvEvent,
    ViewCartEvent,
    ViewContentEvent,
    ViewItemEvent,
    ViewItemsEvent
} from 'affise-attribution-lib';

export class DefaultEventsFactory {
    createEvents(): AffiseEvent[] {
        return [
            this.createAchieveLevelEvent(),
            this.createAddPaymentInfoEvent(),
            this.createAddToCartEvent(),
            this.createAddToWishlistEvent(),
            this.createAdRevenueEvent(),
            this.createClickAdvEvent(),
            this.createCompleteRegistrationEvent(),
            this.createCompleteStreamEvent(),
            this.createCompleteTrialEvent(),
            this.createCompleteTutorialEvent(),
            this.createContactEvent(),
            this.createContentItemsViewEvent(),
            this.createCustomId01Event(),
            this.createCustomId02Event(),
            this.createCustomId03Event(),
            this.createCustomId04Event(),
            this.createCustomId05Event(),
            this.createCustomId06Event(),
            this.createCustomId07Event(),
            this.createCustomId08Event(),
            this.createCustomId09Event(),
            this.createCustomId10Event(),
            this.createCustomizeProductEvent(),
            this.createDeepLinkedEvent(),
            this.createDonateEvent(),
            this.createFindLocationEvent(),
            this.createInitiateCheckoutEvent(),
            this.createInitiatePurchaseEvent(),
            this.createInitiateStreamEvent(),
            this.createInviteEvent(),
            this.createLastAttributedTouchEvent(),
            this.createLeadEvent(),
            this.createListViewEvent(),
            this.createLoginEvent(),
            this.createOpenedFromPushNotificationEvent(),
            this.createOrderEvent(),
            this.createOrderItemAddedEvent(),
            this.createOrderItemRemoveEvent(),
            this.createOrderCancelEvent(),
            this.createOrderReturnRequestCancelEvent(),
            this.createOrderReturnRequestEvent(),
            this.createPurchaseEvent(),
            this.createRateEvent(),
            this.createReEngageEvent(),
            this.createReserveEvent(),
            this.createSalesEvent(),
            this.createScheduleEvent(),
            this.createSearchEvent(),
            this.createShareEvent(),
            this.createSpendCreditsEvent(),
            this.createStartRegistrationEvent(),
            this.createStartTrialEvent(),
            this.createStartTutorialEvent(),
            this.createSubmitApplicationEvent(),
            this.createSubscribeEvent(),
            this.createTravelBookingEvent(),
            this.createUnlockAchievementEvent(),
            this.createUnsubscribeEvent(),
            this.createUpdateEvent(),
            this.createViewAdvEvent(),
            this.createViewCartEvent(),
            this.createViewContentEvent(),
            this.createViewItemEvent(),
            this.createViewItemsEvent(),
            this.createInitialSubscriptionEvent(),
            this.createInitialTrialEvent(),
            this.createInitialOfferEvent(),
            this.createFailedTrialEvent(),
            this.createFailedOfferiseEvent(),
            this.createFailedSubscriptionEvent(),
            this.createFailedTrialFromRetryEvent(),
            this.createFailedOfferFromRetryEvent(),
            this.createFailedSubscriptionFromRetryEvent(),
            this.createTrialInRetryEvent(),
            this.createOfferInRetryEvent(),
            this.createSubscriptionInRetryEvent(),
            this.createConvertedTrialEvent(),
            this.createConvertedOfferEvent(),
            this.createReactivatedSubscriptionEvent(),
            this.createRenewedSubscriptionEvent(),
            this.createConvertedTrialFromRetryEvent(),
            this.createConvertedOfferFromRetryEvent(),
            this.createRenewedSubscriptionFromRetryEvent(),
            this.createUnsubscriptionEvent(),
        ];
    }

    private createAchieveLevelEvent(): AffiseEvent {
        const level: Record<string, any> = {
            "old_level": 69,
            "new_level": 70,
        };

        return new AchieveLevelEvent({
            userData: "userData"
        })
            .addPredefinedString(PredefinedString.DEEP_LINK, "https://new-game.lt")
            .addPredefinedLong(PredefinedLong.SCORE, 25013n)
            .addPredefinedLong(PredefinedLong.LEVEL, 70n)
            .addPredefinedString(PredefinedString.SUCCESS, "true")
            .addPredefinedString(PredefinedString.TUTORIAL_ID, "12")
            .addPredefinedObject(PredefinedObject.CONTENT, level);
    }

    private createAddPaymentInfoEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "card": 4138,
            "type": "phone",
        };
        return new AddPaymentInfoEvent({
            userData: "taxi"
        })
            .addPredefinedString(PredefinedString.PURCHASE_CURRENCY, "USD")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }


    private createAddToCartEvent(): AffiseEvent {
        const products = ["milk", "cookies", "meat", "vegetables"];
        const items: Record<string, any> = {
            "items": products,
        };
        return new AddToCartEvent()
            .addPredefinedString(PredefinedString.DESCRIPTION, "best before 2029")
            .addPredefinedObject(PredefinedObject.CONTENT, items);
    }

    private createAddToWishlistEvent(): AffiseEvent {
        const wishes = ["car", "house", "sdk"];
        const items: Record<string, any> = {
            "items": wishes,
        };
        return new AddToWishlistEvent({
            userData: "next year"
        })
            .addPredefinedString(PredefinedString.COUNTRY, "Russia")
            .addPredefinedString(PredefinedString.CITY, "Voronezh")
            .addPredefinedFloat(PredefinedFloat.LAT, 42.0)
            .addPredefinedFloat(PredefinedFloat.LONG, 24.0)
            .addPredefinedObject(PredefinedObject.CONTENT, items);
    }

    private createAdRevenueEvent(): AffiseEvent {
        return new AdRevenueEvent({userData: "next year"})
            .addPredefinedString(PredefinedString.SOURCE, AffiseAdSource.ADMOB)
            .addPredefinedFloat(PredefinedFloat.REVENUE, 42.5)
            .addPredefinedString(PredefinedString.CURRENCY, "USD")
            .addPredefinedString(PredefinedString.NETWORK, "test")
            .addPredefinedString(PredefinedString.UNIT, "m")
            .addPredefinedString(PredefinedString.PLACEMENT, "end");
    }

    private createClickAdvEvent(): AffiseEvent {
        return new ClickAdvEvent({
            userData: "header",
        })
            .addPredefinedString(PredefinedString.DESCRIPTION, "facebook-meta")
            .addPredefinedString(PredefinedString.PARAM_01, "PARAM_01")
            .addPredefinedString(PredefinedString.PARAM_02, "PARAM_02")
            .addPredefinedString(PredefinedString.PARAM_03, "PARAM_03")
            .addPredefinedString(PredefinedString.PARAM_04, "PARAM_04")
            .addPredefinedString(PredefinedString.PARAM_05, "PARAM_05")
            .addPredefinedString(PredefinedString.PARAM_06, "PARAM_06")
            .addPredefinedString(PredefinedString.PARAM_07, "PARAM_07")
            .addPredefinedString(PredefinedString.PARAM_08, "PARAM_08")
            .addPredefinedString(PredefinedString.PARAM_09, "PARAM_09")
            .addPredefinedString(PredefinedString.PARAM_10, "PARAM_10");
    }

    private createCompleteRegistrationEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "email": "dog@gmail.com",
        };
        return new CompleteRegistrationEvent({
            userData: "promo",
        })
            .addPredefinedObject(PredefinedObject.CONTENT, data)
            .addPredefinedString(PredefinedString.VALIDATED, "02.11.2021")
            .addPredefinedString(PredefinedString.REVIEW_TEXT, "approve")
            .addPredefinedString(PredefinedString.CUSTOMER_SEGMENT, "DOG");
    }

    private createCompleteStreamEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "streamer": "cat",
            "max_viewers": "29",
        };
        return new CompleteStreamEvent({
            userData: "23 hours",
        })
            .addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0)
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createCompleteTrialEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "player": "ghost",
        };
        return new CompleteTrialEvent({
            userData: "time",
        })
            .addPredefinedString(PredefinedString.REGISTRATION_METHOD, "SMS")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createCompleteTutorialEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "name": "intro",
        };
        return new CompleteTutorialEvent({
            userData: "intro",
        })
            .addPredefinedString(PredefinedString.REGISTRATION_METHOD, "SMS")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createContactEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "name": "intro",
        };
        return new ContactEvent({
            userData: "contact",
        })
            .addPredefinedString(PredefinedString.REGISTRATION_METHOD, "SMS")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createContentItemsViewEvent(): AffiseEvent {
        const data: Record<string, any>[] = [
            {
                item: "book",
            },
            {
                item: "guitar",
            },
        ];

        return new ContentItemsViewEvent({
            userData: "personal",
        })
            .addPredefinedListObject(PredefinedListObject.CONTENT_LIST, data)
            .addPredefinedObject(PredefinedObject.CONTENT, {
                name: "Greatest Hits",
            })
            .addPredefinedString(PredefinedString.CONTENT_ID, "2561")
            .addPredefinedString(PredefinedString.CONTENT_TYPE, "MATURE")
            .addPredefinedString(PredefinedString.CURRENCY, "USD");
    }

    private createCustomId01Event(): AffiseEvent {
        return new CustomId01Event({
            userData: "custom",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createCustomId02Event(): AffiseEvent {
        return new CustomId02Event({
            userData: "custom",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createCustomId03Event(): AffiseEvent {
        return new CustomId03Event({
            userData: "custom",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createCustomId04Event(): AffiseEvent {
        return new CustomId04Event({
            userData: "custom",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createCustomId05Event(): AffiseEvent {
        return new CustomId05Event({
            userData: "custom",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createCustomId06Event(): AffiseEvent {
        return new CustomId06Event({
            userData: "custom",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createCustomId07Event(): AffiseEvent {
        return new CustomId07Event({
            userData: "custom",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createCustomId08Event(): AffiseEvent {
        return new CustomId08Event({
            userData: "custom",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createCustomId09Event(): AffiseEvent {
        return new CustomId09Event({
            userData: "custom",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createCustomId10Event(): AffiseEvent {
        return new CustomId10Event({
            userData: "custom",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createCustomizeProductEvent(): AffiseEvent {
        return new CustomizeProductEvent({
            userData: "customize",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createDeepLinkedEvent(): AffiseEvent {
        return new DeepLinkedEvent({
            userData: "referrer: google"
        })
            .addPredefinedObject(PredefinedObject.CONTENT, {isLinked: true})
            .addPredefinedString(PredefinedString.ADREV_AD_TYPE, "interstitial")
            .addPredefinedString(PredefinedString.REGION, "ASIA")
            .addPredefinedString(PredefinedString.CLASS, "student");
    }

    private createDonateEvent(): AffiseEvent {
        return new DonateEvent({
            userData: "donate",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createFindLocationEvent(): AffiseEvent {
        return new FindLocationEvent({
            userData: "FindLocation",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createInitiateCheckoutEvent(): AffiseEvent {
        return new InitiateCheckoutEvent({
            userData: "checkout",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createInitiatePurchaseEvent(): AffiseEvent {
        const data: Record<string, any> = {
            payment: "card",
        };
        return new InitiatePurchaseEvent({
            userData: "best price"
        })
            .addPredefinedString(PredefinedString.ORDER_ID, "23123")
            .addPredefinedFloat(PredefinedFloat.PRICE, 2.19)
            .addPredefinedLong(PredefinedLong.QUANTITY, 1n)
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createInitiateStreamEvent(): AffiseEvent {
        const data: Record<string, any> = {
            streamer: "car",
            date: "02.03.2021",
        };
        return new InitiateStreamEvent({
            userData: "shooter",
        })
            .addPredefinedString(PredefinedString.COUPON_CODE, "25XLKM")
            .addPredefinedString(PredefinedString.VIRTUAL_CURRENCY_NAME, "BTC")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createInviteEvent(): AffiseEvent {
        const data: Record<string, any> = {
            invitation: "mail",
            date: "02.03.2021",
        };
        return new InviteEvent({
            userData: "dancing",
        })
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createLastAttributedTouchEvent(): AffiseEvent {
        const data: Record<string, any> = {
            touchType: TouchType.CLICK,
            touchData: {
                header: 2,
            },
        };
        return new LastAttributedTouchEvent({
            userData: "tablet",
        })
            .addPredefinedString(PredefinedString.SUBSCRIPTION_ID, "lasAK22")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createLeadEvent(): AffiseEvent {
        return new LeadEvent({
            userData: "Lead",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createListViewEvent(): AffiseEvent {
        const data: Record<string, any> = {
            clothes: 2,
        };
        return new ListViewEvent({
            userData: "items",
        })
            .addPredefinedString(PredefinedString.PAYMENT_INFO_AVAILABLE, "card")
            .addPredefinedString(PredefinedString.SEARCH_STRING, "best car wash")
            .addPredefinedString(PredefinedString.SUGGESTED_DESTINATIONS, "crete, spain")
            .addPredefinedString(PredefinedString.SUGGESTED_HOTELS, "beach resort, marina spa")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createLoginEvent(): AffiseEvent {
        const data: Record<string, any> = {
            email: "cat@gmail.com",
        };
        return new LoginEvent({
            userData: "web",
        })
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createOpenedFromPushNotificationEvent(): AffiseEvent {
        return new OpenedFromPushNotificationEvent({
            userData: "active",
        })
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, {
                details: "silent",
            });
    }

    private createOrderEvent(): AffiseEvent {
        return new OrderEvent({
            userData: "Order",
        })
            .addPredefinedString(PredefinedString.PARAM_01, "param1");
        // PredefinedGroup
        // .addPredefinedListGroup([
        //     PredefinedGroup()
        //         .addPredefinedString(PredefinedString.CUSTOMER_USER_ID, "KDCJHB10834rJHG")
        //         .addPredefinedString(PredefinedString.CONTENT_ID, "334923062984")
        //         .addPredefinedString(PredefinedString.DESCRIPTION, "SevenFriday Men's M1B-01 Urban Explorer 47.6 Automatic Watch")
        //         .addPredefinedLong(PredefinedLong.QUANTITY, 3)
        //         .addPredefinedFloat(PredefinedFloat.PRICE, 499.0)
        //         .addPredefinedString(PredefinedString.CURRENCY, "USD")
        //         .addPredefinedFloat(PredefinedFloat.REVENUE, 1497.0)
        //         .addPredefinedString(PredefinedString.ORDER_ID, "ID_34923"),
        //
        //     PredefinedGroup()
        //         .addPredefinedString(PredefinedString.CUSTOMER_USER_ID, "KDCJHB10834rJHG")
        //         .addPredefinedString(PredefinedString.CONTENT_ID, "383791923777")
        //         .addPredefinedString(PredefinedString.DESCRIPTION, "2021 Apple iPad 9th Gen 64/256GB WiFi 10.2")
        //         .addPredefinedLong(PredefinedLong.QUANTITY, 1)
        //         .addPredefinedFloat(PredefinedFloat.PRICE, 299.0)
        //         .addPredefinedString(PredefinedString.CURRENCY, "USD")
        //         .addPredefinedFloat(PredefinedFloat.REVENUE, 299.0)
        //         .addPredefinedString(PredefinedString.ORDER_ID, "ID_83792")
        // ]);
    }

    private createOrderItemAddedEvent(): AffiseEvent {
        return new OrderItemAddedEvent({userData: "apple"})
            .addPredefinedString(PredefinedString.ORDER_ID, "23123")
            .addPredefinedFloat(PredefinedFloat.PRICE, 2.19)
            .addPredefinedLong(PredefinedLong.QUANTITY, 1n);
    }

    private createOrderItemRemoveEvent(): AffiseEvent {
        return new OrderItemRemoveEvent({userData: "apple"})
            .addPredefinedString(PredefinedString.ORDER_ID, "23123")
            .addPredefinedFloat(PredefinedFloat.PRICE, 2.19)
            .addPredefinedLong(PredefinedLong.QUANTITY, 1n);
    }

    private createOrderCancelEvent(): AffiseEvent {
        return new OrderCancelEvent({
            userData: "OrderCancel",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createOrderReturnRequestCancelEvent(): AffiseEvent {
        return new OrderReturnRequestCancelEvent({
            userData: "OrderReturnRequestCancel",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createOrderReturnRequestEvent(): AffiseEvent {
        return new OrderReturnRequestEvent({
            userData: "OrderReturnRequest",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createPurchaseEvent(): AffiseEvent {
        const data: Record<string, any> = {
            phone: 1,
            case: 1,
        };
        return new PurchaseEvent({
            userData: "apple",
        })
            .addPredefinedString(PredefinedString.ORDER_ID, "23123")
            .addPredefinedFloat(PredefinedFloat.PRICE, 2.19)
            .addPredefinedLong(PredefinedLong.QUANTITY, 1n)
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createRateEvent(): AffiseEvent {
        const data: Record<string, any> = {
            rating: 5,
        };
        return new RateEvent({
            userData: "no bugs",
        })
            .addPredefinedString(PredefinedString.PREFERRED_NEIGHBORHOODS, "2")
            .addPredefinedLong(PredefinedLong.PREFERRED_NUM_STOPS, 4n)
            .addPredefinedFloat(PredefinedFloat.PREFERRED_PRICE_RANGE, 10.22)
            .addPredefinedLong(PredefinedLong.PREFERRED_STAR_RATINGS, 6n)
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createReEngageEvent(): AffiseEvent {
        return new ReEngageEvent({
            userData: "web",
        })
            .addPredefinedString(PredefinedString.CUSTOMER_USER_ID, "4")
            .addPredefinedObject(PredefinedObject.CONTENT, {
                reEngage: "data",
            });
    }

    private createReserveEvent(): AffiseEvent {
        const data: Record<string, any> = {
            ticket: "movie",
        };
        const data2: Record<string, any> = {
            food: "coke",
        };
        return new ReserveEvent({
            userData: "discount",
        })
            .addPredefinedString(PredefinedString.ORDER_ID, "23123")
            .addPredefinedFloat(PredefinedFloat.PRICE, 2.19)
            .addPredefinedLong(PredefinedLong.QUANTITY, 1n)
            .addPredefinedListObject(PredefinedListObject.CONTENT_LIST, [data, data2]);
    }

    private createSalesEvent(): AffiseEvent {
        return new SalesEvent({
            userData: "Sales",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createScheduleEvent(): AffiseEvent {
        return new ScheduleEvent({
            userData: "Schedule",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createSearchEvent(): AffiseEvent {
        const data: string[] = [
            "a16",
            "milk",
            "grass",
        ];
        return new SearchEvent({
            userData: "browser",
        })
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedListString(PredefinedListString.CONTENT_IDS, data);
    }

    private createShareEvent(): AffiseEvent {
        const data: Record<string, any> = {
            post_id: "252242",
            post_img: "img.webp",
        };

        return new ShareEvent({
            userData: "telegram",
        })
            .addPredefinedString(PredefinedString.RECEIPT_ID, "22")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createSpendCreditsEvent(): AffiseEvent {
        return new SpendCreditsEvent({
            userData: "boosters",
        })
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, {
                credits: 2142,
            });
    }

    private createStartRegistrationEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "time": "19:22:11",
        };
        return new StartRegistrationEvent({
            userData: "referrer",
        })
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createStartTrialEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "time": "19:22:11",
        };
        return new StartTrialEvent({
            userData: "30-days"
        })
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createStartTutorialEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "time": "19:22:11",
            "reward": "22",
        };

        return new StartTutorialEvent({
            userData: "video-feature"
        })
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createSubmitApplicationEvent(): AffiseEvent {
        return new SubmitApplicationEvent({
            userData: "SubmitApplication",
        }).addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createSubscribeEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "streamer": "cat",
        };
        return new SubscribeEvent({
            userData: "wire",
        })
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createTravelBookingEvent(): AffiseEvent {
        return new TravelBookingEvent({
            userData: "booking",
        })
            .addPredefinedLong(PredefinedLong.NUM_ADULTS, 1n)
            .addPredefinedLong(PredefinedLong.NUM_CHILDREN, 2n)
            .addPredefinedLong(PredefinedLong.NUM_INFANTS, 1n)
            .addPredefinedLong(PredefinedLong.DATE_A, "30.12.2020".timestamp())
            .addPredefinedLong(PredefinedLong.DATE_B, "01.01.2021".timestamp())
            .addPredefinedLong(PredefinedLong.DEPARTING_ARRIVAL_DATE, "01.01.2021".timestamp())
            .addPredefinedLong(PredefinedLong.DEPARTING_DEPARTURE_DATE, "30.12.2020".timestamp())
            .addPredefinedString(PredefinedString.DESTINATION_A, "usa")
            .addPredefinedString(PredefinedString.DESTINATION_B, "mexico")
            .addPredefinedString(PredefinedString.DESTINATION_LIST, "usa, mexico")
            .addPredefinedLong(PredefinedLong.HOTEL_SCORE, 5n)
            .addPredefinedLong(PredefinedLong.TRAVEL_START, "01.12.2020".timestamp())
            .addPredefinedLong(PredefinedLong.TRAVEL_END, "01.12.2021".timestamp());
    }

    private createUnlockAchievementEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "achievement": "new level",
        };
        return new UnlockAchievementEvent({
            userData: "best damage"
        })
            .addPredefinedLong(PredefinedLong.USER_SCORE, 12552n)
            .addPredefinedString(PredefinedString.ACHIEVEMENT_ID, "1334-1225-ASDZ")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createUnsubscribeEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "reason": "span",
        };
        return new UnsubscribeEvent({
            userData: "02.01.2021"
        })
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createUpdateEvent(): AffiseEvent {
        const data: string[] = ["com.facebook"];
        return new UpdateEvent({
            userData: "firmware",
        })
            .addPredefinedLong(PredefinedLong.EVENT_START, "01.02.2021".timestamp())
            .addPredefinedLong(PredefinedLong.EVENT_END, "01.01.2022".timestamp())
            .addPredefinedString(PredefinedString.NEW_VERSION, "8")
            .addPredefinedString(PredefinedString.OLD_VERSION, "1.8")
            .addPredefinedListString(PredefinedListString.CONTENT_IDS, data);
    }

    private createViewAdvEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "source": "amazon",
        };
        return new ViewAdvEvent({
            timeStampMillis: Date.now(),
            userData: "skip"
        })
            .addPredefinedLong(PredefinedLong.RETURNING_ARRIVAL_DATE, "01.12.2021".timestamp())
            .addPredefinedLong(PredefinedLong.RETURNING_DEPARTURE_DATE, "01.12.2020".timestamp())
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createViewCartEvent(): AffiseEvent {
        const data: Record<string, any> = {
            cart_value: "25.22$",
            cart_items: "2",
        };
        return new ViewCartEvent({
            userData: "main",
        })
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createViewContentEvent(): AffiseEvent {
        return new ViewContentEvent({
            userData: "ViewContent",
        })
            .addPredefinedString(PredefinedString.PARAM_01, "param1");
    }

    private createViewItemEvent(): AffiseEvent {
        const data: Record<string, any> = {
            section_name: "header",
        };
        return new ViewItemEvent({
            userData: "main",
        })
            .addPredefinedLong(PredefinedLong.MAX_RATING_VALUE, 5n)
            .addPredefinedLong(PredefinedLong.RATING_VALUE, 4n)
            .addPredefinedObject(PredefinedObject.CONTENT, data);
    }

    private createViewItemsEvent(): AffiseEvent {
        const data: Record<string, any>[] = [
            {
                section_name: "header",
            },
            {
                section_name: "section-1",
            },
            {
                section_name: "section-2",
            },
            {
                section_name: "footer",
            },
        ];
        return new ViewItemsEvent({
            userData: "main",
        })
            .addPredefinedLong(PredefinedLong.MAX_RATING_VALUE, 5n)
            .addPredefinedLong(PredefinedLong.RATING_VALUE, 4n)
            .addPredefinedListObject(PredefinedListObject.CONTENT_LIST, data);
    }

    private createInitialSubscriptionEvent(): AffiseEvent {
        return new InitialSubscriptionEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        })
            .addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createInitialTrialEvent(): AffiseEvent {
        return new InitialTrialEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createInitialOfferEvent(): AffiseEvent {
        return new InitialOfferEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createFailedTrialEvent(): AffiseEvent {
        return new FailedTrialEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createFailedOfferiseEvent(): AffiseEvent {
        return new FailedOfferiseEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createFailedSubscriptionEvent(): AffiseEvent {
        return new FailedSubscriptionEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createFailedTrialFromRetryEvent(): AffiseEvent {
        return new FailedTrialFromRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createFailedOfferFromRetryEvent(): AffiseEvent {
        return new FailedOfferFromRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createFailedSubscriptionFromRetryEvent(): AffiseEvent {
        return new FailedSubscriptionFromRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createTrialInRetryEvent(): AffiseEvent {
        return new TrialInRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createOfferInRetryEvent(): AffiseEvent {
        return new OfferInRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createSubscriptionInRetryEvent(): AffiseEvent {
        return new SubscriptionInRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createConvertedTrialEvent(): AffiseEvent {
        return new ConvertedTrialEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createConvertedOfferEvent(): AffiseEvent {
        return new ConvertedOfferEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createReactivatedSubscriptionEvent(): AffiseEvent {
        return new ReactivatedSubscriptionEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createRenewedSubscriptionEvent(): AffiseEvent {
        return new RenewedSubscriptionEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createConvertedTrialFromRetryEvent(): AffiseEvent {
        return new ConvertedTrialFromRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createConvertedOfferFromRetryEvent(): AffiseEvent {
        return new ConvertedOfferFromRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createRenewedSubscriptionFromRetryEvent(): AffiseEvent {
        return new RenewedSubscriptionFromRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }

    private createUnsubscriptionEvent(): AffiseEvent {
        return new UnsubscriptionEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        }).addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
    }
}

declare global {
    interface String {
        timestamp(): bigint;
    }
}

String.prototype.timestamp = function (): bigint {
    const part: string[] = String(this).split(".");
    const date = new Date(
        parseInt(part[2] || "0", 10),
        parseInt(part[1] || "0", 10) - 1,
        parseInt(part[0] || "0", 10)
    );

    return BigInt(date.getTime());
};
