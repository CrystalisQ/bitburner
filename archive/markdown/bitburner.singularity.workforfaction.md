<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [bitburner](./bitburner.md) &gt; [Singularity](./bitburner.singularity.md) &gt; [workForFaction](./bitburner.singularity.workforfaction.md)

## Singularity.workForFaction() method

Work for a faction.

<b>Signature:</b>

```typescript
workForFaction(faction: string, workType: string, focus?: boolean): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  faction | string | Name of faction to work for. |
|  workType | string | Type of work to perform for the faction. |
|  focus | boolean | Acquire player focus on this work operation. Optional. Defaults to true. |

<b>Returns:</b>

boolean

True if the player starts working, and false otherwise.

## Remarks

RAM cost: 3 GB \* 16/4/1

This function will automatically set you to start working for the specified faction. Obviously, you must be a member of the faction or else this function will fail. If you are already in the middle of some “working” action (such as working for a company, training at a gym, or creating a program), then running this function will automatically cancel that action and give you your earnings.

This function will return true if you successfully start working for the specified faction, and false otherwise.

Note that when you are working for a faction, you will not actually receive your earnings (reputation, experience) until you FINISH the action.

## Example 1


```ts
// NS1:
//If you only want to work until you get 100,000 faction reputation. One small hack to get around this is to continuously restart the action to receive your earnings:
while (getFactionRep(FACTION NAME) < VALUE) {
   workForFaction(FACNAME, WORKTYPE);
   sleep(60000);
}
//This way, your faction reputation will be updated every minute.
```

## Example 2


```ts
// NS2:
//If you only want to work until you get 100,000 faction reputation. One small hack to get around this is to continuously restart the action to receive your earnings:
while (ns.getFactionRep(FACTION NAME) < VALUE) {
   ns.workForFaction(FACNAME, WORKTYPE);
   await ns.sleep(60000);
}
//This way, your faction reputation will be updated every minute.
```
