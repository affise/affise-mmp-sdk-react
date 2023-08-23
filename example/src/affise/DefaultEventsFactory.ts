import {
    AchieveLevelEvent,
    AddPaymentInfoEvent,
    AddToCartEvent,
    AddToWishlistEvent,
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
            this.createOrderCancelEvent(),
            this.createOrderEvent(),
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

        const event = new AchieveLevelEvent({
            userData: "userData"
        });

        event
            .addPredefinedString(PredefinedString.DEEP_LINK, "https://new-game.lt")
            .addPredefinedLong(PredefinedLong.SCORE, 25013n)
            .addPredefinedLong(PredefinedLong.LEVEL, 70n)
            .addPredefinedString(PredefinedString.SUCCESS, "true")
            .addPredefinedString(PredefinedString.TUTORIAL_ID, "12")
            .addPredefinedObject(PredefinedObject.CONTENT, level);

        return event;
    }

    private createAddPaymentInfoEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "card": 4138,
            "type": "phone",
        };
        const event = new AddPaymentInfoEvent({
            userData: "taxi"
        });
        event
            .addPredefinedString(PredefinedString.PURCHASE_CURRENCY, "USD")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }


    private createAddToCartEvent(): AffiseEvent {
        const products = ["milk", "cookies", "meat", "vegetables"];
        const items: Record<string, any> = {
            "items": products,
        };
        const event = new AddToCartEvent();

        event
            .addPredefinedString(PredefinedString.DESCRIPTION, "best before 2029")
            .addPredefinedObject(PredefinedObject.CONTENT, items);

        return event;
    }

    private createAddToWishlistEvent(): AffiseEvent {
        const wishes = ["car", "house", "sdk"];
        const items: Record<string, any> = {
            "items": wishes,
        };
        const event = new AddToWishlistEvent({
            userData: "next year"
        });

        event
            .addPredefinedString(PredefinedString.COUNTRY, "Russia")
            .addPredefinedString(PredefinedString.CITY, "Voronezh")
            .addPredefinedFloat(PredefinedFloat.LAT, 42.0)
            .addPredefinedFloat(PredefinedFloat.LONG, 24.0)
            .addPredefinedObject(PredefinedObject.CONTENT, items);

        return event;
    }

    private createClickAdvEvent(): AffiseEvent {
        const event = new ClickAdvEvent({
            userData: "header",
        });

        event
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

        return event;
    }

    private createCompleteRegistrationEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "email": "dog@gmail.com",
        };
        const event = new CompleteRegistrationEvent({
            userData: "promo",
        });
        event
            .addPredefinedObject(PredefinedObject.CONTENT, data)
            .addPredefinedString(PredefinedString.VALIDATED, "02.11.2021")
            .addPredefinedString(PredefinedString.REVIEW_TEXT, "approve")
            .addPredefinedString(PredefinedString.CUSTOMER_SEGMENT, "DOG");

        return event;
    }

    private createCompleteStreamEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "streamer": "cat",
            "max_viewers": "29",
        };
        const event = new CompleteStreamEvent({
            userData: "23 hours",
        });
        event
            .addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0)
            .addPredefinedObject(PredefinedObject.CONTENT, data);

        return event;
    }

    private createCompleteTrialEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "player": "ghost",
        };
        const event = new CompleteTrialEvent({
            userData: "time",
        });
        event
            .addPredefinedString(PredefinedString.REGISTRATION_METHOD, "SMS")
            .addPredefinedObject(PredefinedObject.CONTENT, data);

        return event;
    }

    private createCompleteTutorialEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "name": "intro",
        };
        const event = new CompleteTutorialEvent({
            userData: "intro",
        });
        event
            .addPredefinedString(PredefinedString.REGISTRATION_METHOD, "SMS")
            .addPredefinedObject(PredefinedObject.CONTENT, data);

        return event;
    }

    private createContactEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "name": "intro",
        };
        const event = new ContactEvent({
            userData: "contact",
        });
        event
            .addPredefinedString(PredefinedString.REGISTRATION_METHOD, "SMS")
            .addPredefinedObject(PredefinedObject.CONTENT, data);

        return event;
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

        const event = new ContentItemsViewEvent({
            userData: "personal",
        });

        event
            .addPredefinedListObject(PredefinedListObject.CONTENT_LIST, data)
            .addPredefinedObject(PredefinedObject.CONTENT, {
                name: "Greatest Hits",
            })
            .addPredefinedString(PredefinedString.CONTENT_ID, "2561")
            .addPredefinedString(PredefinedString.CONTENT_TYPE, "MATURE")
            .addPredefinedString(PredefinedString.CURRENCY, "USD");

        return event;
    }

    private createCustomId01Event(): AffiseEvent {
        const event = new CustomId01Event({
            userData: "custom",
        });

        event.addPredefinedString(PredefinedString.PARAM_01, "param1");

        return event;
    }

    private createCustomId02Event(): AffiseEvent {
        const event = new CustomId02Event({
            userData: "custom",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createCustomId03Event(): AffiseEvent {
        const event = new CustomId03Event({
            userData: "custom",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createCustomId04Event(): AffiseEvent {
        const event = new CustomId04Event({
            userData: "custom",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createCustomId05Event(): AffiseEvent {
        const event = new CustomId05Event({
            userData: "custom",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createCustomId06Event(): AffiseEvent {
        const event = new CustomId06Event({
            userData: "custom",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createCustomId07Event(): AffiseEvent {
        const event = new CustomId07Event({
            userData: "custom",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createCustomId08Event(): AffiseEvent {
        const event = new CustomId08Event({
            userData: "custom",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createCustomId09Event(): AffiseEvent {
        const event = new CustomId09Event({
            userData: "custom",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createCustomId10Event(): AffiseEvent {
        const event = new CustomId10Event({
            userData: "custom",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createCustomizeProductEvent(): AffiseEvent {
        const event = new CustomizeProductEvent({
            userData: "customize",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createDeepLinkedEvent(): AffiseEvent {
        const event = new DeepLinkedEvent({
            userData: "referrer: google"
        });

        event
            .addPredefinedObject(PredefinedObject.CONTENT, {isLinked: true})
            .addPredefinedString(PredefinedString.ADREV_AD_TYPE, "interstitial")
            .addPredefinedString(PredefinedString.REGION, "ASIA")
            .addPredefinedString(PredefinedString.CLASS, "student");
        return event;
    }

    private createDonateEvent(): AffiseEvent {
        const event = new DonateEvent({
            userData: "donate",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createFindLocationEvent(): AffiseEvent {
        const event = new FindLocationEvent({
            userData: "FindLocation",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createInitiateCheckoutEvent(): AffiseEvent {
        const event = new InitiateCheckoutEvent({
            userData: "checkout",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createInitiatePurchaseEvent(): AffiseEvent {
        const data: Record<string, any> = {
            payment: "card",
        };
        const event = new InitiatePurchaseEvent({
            userData: "best price"
        });
        event
            .addPredefinedString(PredefinedString.ORDER_ID, "23123")
            .addPredefinedFloat(PredefinedFloat.PRICE, 2.19)
            .addPredefinedLong(PredefinedLong.QUANTITY, 1n)
            .addPredefinedObject(PredefinedObject.CONTENT, data);

        return event;
    }

    private createInitiateStreamEvent(): AffiseEvent {
        const data: Record<string, any> = {
            streamer: "car",
            date: "02.03.2021",
        };
        const event = new InitiateStreamEvent({
            userData: "shooter",
        });
        event
            .addPredefinedString(PredefinedString.COUPON_CODE, "25XLKM")
            .addPredefinedString(PredefinedString.VIRTUAL_CURRENCY_NAME, "BTC")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }

    private createInviteEvent(): AffiseEvent {
        const data: Record<string, any> = {
            invitation: "mail",
            date: "02.03.2021",
        };
        const event = new InviteEvent({
            userData: "dancing",
        });
        event
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }

    private createLastAttributedTouchEvent(): AffiseEvent {
        const data: Record<string, any> = {
            touchType: TouchType.CLICK,
            touchData: {
                header: 2,
            },
        };
        const event = new LastAttributedTouchEvent({
            userData: "tablet",
        });
        event
            .addPredefinedString(PredefinedString.SUBSCRIPTION_ID, "lasAK22")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }

    private createLeadEvent(): AffiseEvent {
        const event = new LeadEvent({
            userData: "Lead",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createListViewEvent(): AffiseEvent {
        const data: Record<string, any> = {
            clothes: 2,
        };
        const event = new ListViewEvent({
            userData: "items",
        });
        event
            .addPredefinedString(PredefinedString.PAYMENT_INFO_AVAILABLE, "card")
            .addPredefinedString(PredefinedString.SEARCH_STRING, "best car wash")
            .addPredefinedString(PredefinedString.SUGGESTED_DESTINATIONS, "crete, spain")
            .addPredefinedString(PredefinedString.SUGGESTED_HOTELS, "beach resort, marina spa")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }

    private createLoginEvent(): AffiseEvent {
        const data: Record<string, any> = {
            email: "cat@gmail.com",
        };
        const event = new LoginEvent({
            userData: "web",
        });
        event
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);

        return event;
    }

    private createOpenedFromPushNotificationEvent(): AffiseEvent {
        const event = new OpenedFromPushNotificationEvent({
            userData: "active",
        });
        event
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, {
                details: "silent",
            });
        return event;
    }

    private createOrderEvent(): AffiseEvent {
        const event = new OrderEvent({
            userData: "Order",
        });
        event
            .addPredefinedString(PredefinedString.PARAM_01, "param1");

        // event.addPredefinedListGroup([
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
        return event;
    }

    private createOrderCancelEvent(): AffiseEvent {
        const event = new OrderCancelEvent({
            userData: "OrderCancel",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createOrderReturnRequestCancelEvent(): AffiseEvent {
        const event = new OrderReturnRequestCancelEvent({
            userData: "OrderReturnRequestCancel",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createOrderReturnRequestEvent(): AffiseEvent {
        const event = new OrderReturnRequestEvent({
            userData: "OrderReturnRequest",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createPurchaseEvent(): AffiseEvent {
        const data: Record<string, any> = {
            phone: 1,
            case: 1,
        };
        const event = new PurchaseEvent({
            userData: "apple",
        });
        event
            .addPredefinedString(PredefinedString.ORDER_ID, "23123")
            .addPredefinedFloat(PredefinedFloat.PRICE, 2.19)
            .addPredefinedLong(PredefinedLong.QUANTITY, 1n)
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }

    private createRateEvent(): AffiseEvent {
        const data: Record<string, any> = {
            rating: 5,
        };
        const event = new RateEvent({
            userData: "no bugs",
        });
        event
            .addPredefinedString(PredefinedString.PREFERRED_NEIGHBORHOODS, "2")
            .addPredefinedLong(PredefinedLong.PREFERRED_NUM_STOPS, 4n)
            .addPredefinedFloat(PredefinedFloat.PREFERRED_PRICE_RANGE, 10.22)
            .addPredefinedLong(PredefinedLong.PREFERRED_STAR_RATINGS, 6n)
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }

    private createReEngageEvent(): AffiseEvent {
        const event = new ReEngageEvent({
            userData: "web",
        });
        event
            .addPredefinedString(PredefinedString.CUSTOMER_USER_ID, "4")
            .addPredefinedObject(PredefinedObject.CONTENT, {
                reEngage: "data",
            });
        return event;
    }

    private createReserveEvent(): AffiseEvent {
        const data: Record<string, any> = {
            ticket: "movie",
        };
        const data2: Record<string, any> = {
            food: "coke",
        };
        const event = new ReserveEvent({
            userData: "discount",
        });
        event
            .addPredefinedString(PredefinedString.ORDER_ID, "23123")
            .addPredefinedFloat(PredefinedFloat.PRICE, 2.19)
            .addPredefinedLong(PredefinedLong.QUANTITY, 1n)
            .addPredefinedListObject(PredefinedListObject.CONTENT_LIST, [data, data2]);
        return event;
    }

    private createSalesEvent(): AffiseEvent {
        const event = new SalesEvent({
            userData: "Sales",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createScheduleEvent(): AffiseEvent {
        const event = new ScheduleEvent({
            userData: "Schedule",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createSearchEvent(): AffiseEvent {
        const data: string[] = [
            "a16",
            "milk",
            "grass",
        ];
        const event = new SearchEvent({
            userData: "browser",
        });
        event
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedListString(PredefinedListString.CONTENT_IDS, data);
        return event;
    }

    private createShareEvent(): AffiseEvent {
        const data: Record<string, any> = {
            post_id: "252242",
            post_img: "img.webp",
        };

        const event = new ShareEvent({
            userData: "telegram",
        });
        event
            .addPredefinedString(PredefinedString.RECEIPT_ID, "22")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }

    private createSpendCreditsEvent(): AffiseEvent {
        const event = new SpendCreditsEvent({
            userData: "boosters",
        });
        event
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, {
                credits: 2142,
            });
        return event;
    }

    private createStartRegistrationEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "time": "19:22:11",
        };
        const event = new StartRegistrationEvent({
            userData: "referrer",
        });
        event
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }

    private createStartTrialEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "time": "19:22:11",
        };
        const event = new StartTrialEvent({
            userData: "30-days"
        });
        event
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }

    private createStartTutorialEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "time": "19:22:11",
            "reward": "22",
        };

        const event = new StartTutorialEvent({
            userData: "video-feature"
        });
        event
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }

    private createSubmitApplicationEvent(): AffiseEvent {
        const event = new SubmitApplicationEvent({
            userData: "SubmitApplication",
        });
        event.addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createSubscribeEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "streamer": "cat",
        };
        const event = new SubscribeEvent({
            userData: "wire",
        });
        event
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }

    private createTravelBookingEvent(): AffiseEvent {
        const event = new TravelBookingEvent({
            userData: "booking",
        });
        event
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
        return event;
    }

    private createUnlockAchievementEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "achievement": "new level",
        };
        const event = new UnlockAchievementEvent({
            userData: "best damage"
        });
        event
            .addPredefinedLong(PredefinedLong.USER_SCORE, 12552n)
            .addPredefinedString(PredefinedString.ACHIEVEMENT_ID, "1334-1225-ASDZ")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }

    private createUnsubscribeEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "reason": "span",
        };
        const event = new UnsubscribeEvent({
            userData: "02.01.2021"
        });
        event
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }

    private createUpdateEvent(): AffiseEvent {
        const data: string[] = ["com.facebook"];
        const event = new UpdateEvent({
            userData: "firmware",
        });
        event
            .addPredefinedLong(PredefinedLong.EVENT_START, "01.02.2021".timestamp())
            .addPredefinedLong(PredefinedLong.EVENT_END, "01.01.2022".timestamp())
            .addPredefinedString(PredefinedString.NEW_VERSION, "8")
            .addPredefinedString(PredefinedString.OLD_VERSION, "1.8")
            .addPredefinedListString(PredefinedListString.CONTENT_IDS, data);
        return event;
    }

    private createViewAdvEvent(): AffiseEvent {
        const data: Record<string, any> = {
            "source": "amazon",
        };
        const event = new ViewAdvEvent({
            timeStampMillis: Date.now(),
            userData: "skip"
        });
        event
            .addPredefinedLong(PredefinedLong.RETURNING_ARRIVAL_DATE, "01.12.2021".timestamp())
            .addPredefinedLong(PredefinedLong.RETURNING_DEPARTURE_DATE, "01.12.2020".timestamp())
            .addPredefinedObject(PredefinedObject.CONTENT, data);

        return event;
    }

    private createViewCartEvent(): AffiseEvent {
        const data: Record<string, any> = {
            cart_value: "25.22$",
            cart_items: "2",
        };
        const event = new ViewCartEvent({
            userData: "main",
        });
        event
            .addPredefinedString(PredefinedString.PARAM_01, "param1")
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
    }

    private createViewContentEvent(): AffiseEvent {
        const event = new ViewContentEvent({
            userData: "ViewContent",
        });
        event
            .addPredefinedString(PredefinedString.PARAM_01, "param1");
        return event;
    }

    private createViewItemEvent(): AffiseEvent {
        const data: Record<string, any> = {
            section_name: "header",
        };
        const event = new ViewItemEvent({
            userData: "main",
        });
        event
            .addPredefinedLong(PredefinedLong.MAX_RATING_VALUE, 5n)
            .addPredefinedLong(PredefinedLong.RATING_VALUE, 4n)
            .addPredefinedObject(PredefinedObject.CONTENT, data);
        return event;
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
        const event = new ViewItemsEvent({
            userData: "main",
        });
        event
            .addPredefinedLong(PredefinedLong.MAX_RATING_VALUE, 5n)
            .addPredefinedLong(PredefinedLong.RATING_VALUE, 4n)
            .addPredefinedListObject(PredefinedListObject.CONTENT_LIST, data);
        return event;
    }

    private createInitialSubscriptionEvent(): AffiseEvent {
        const event = new InitialSubscriptionEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });

        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createInitialTrialEvent(): AffiseEvent {
        const event = new InitialTrialEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createInitialOfferEvent(): AffiseEvent {
        const event = new InitialOfferEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createFailedTrialEvent(): AffiseEvent {
        const event = new FailedTrialEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createFailedOfferiseEvent(): AffiseEvent {
        const event = new FailedOfferiseEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createFailedSubscriptionEvent(): AffiseEvent {
        const event = new FailedSubscriptionEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createFailedTrialFromRetryEvent(): AffiseEvent {
        const event = new FailedTrialFromRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createFailedOfferFromRetryEvent(): AffiseEvent {
        const event = new FailedOfferFromRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createFailedSubscriptionFromRetryEvent(): AffiseEvent {
        const event = new FailedSubscriptionFromRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createTrialInRetryEvent(): AffiseEvent {
        const event = new TrialInRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createOfferInRetryEvent(): AffiseEvent {
        const event = new OfferInRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createSubscriptionInRetryEvent(): AffiseEvent {
        const event = new SubscriptionInRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createConvertedTrialEvent(): AffiseEvent {
        const event = new ConvertedTrialEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createConvertedOfferEvent(): AffiseEvent {
        const event = new ConvertedOfferEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createReactivatedSubscriptionEvent(): AffiseEvent {
        const event = new ReactivatedSubscriptionEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createRenewedSubscriptionEvent(): AffiseEvent {
        const event = new RenewedSubscriptionEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createConvertedTrialFromRetryEvent(): AffiseEvent {
        const event = new ConvertedTrialFromRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createConvertedOfferFromRetryEvent(): AffiseEvent {
        const event = new ConvertedOfferFromRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createRenewedSubscriptionFromRetryEvent(): AffiseEvent {
        const event = new RenewedSubscriptionFromRetryEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
    }

    private createUnsubscriptionEvent(): AffiseEvent {
        const event = new UnsubscriptionEvent({
            data: {
                affise_event_revenue: 2.99,
                affise_event_currency: "USD",
                affise_event_product_id: 278459628375,
            },
            userData: "Subscription Plus"
        });
        event.addPredefinedFloat(PredefinedFloat.REVENUE, 225522.0);
        return event;
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
