# System Notes

-   Systems are ordered into multiple sections to reduce system coupling, reduce code cohesion, increase predictability and thus increase maintianability and create a better coding experience to ultimately increase the chances this project is completed.

These are the varius system groups:

## 1_inputs

Input systems MODIFY the values of components or add or remove components.

##

## 3_outputs

Output systems do NOT modify the values of any components or add or remove components. They simply read the components. The only interactions they have with components is
Eg:

-   Renderer - Just reads componen data to determine where and how to render an entity
-   Network(output) - Just sends what has happened to players. (Maybe should put right next to inputs.....)

# System order is determined by these functionalities the systems have (how):

modify comp val
add comp
remove comp
read comp val
reduce time between systems

# System order is determined by gameplay (why)

-   block attack overides punch attack in street fighter
-   ultimate attack and certain skills overides the block

# Design consequences

Because change rapidly, the system architecture must support quick edits to test new features and should be maintainable and easy to predictwhere things shoud go

# Premature optimization

We don't even know what use cases we'll have. Although designing a bunch of rules of the architecture can improve predictability and thus save time, it assumes that the game can even fit within that framework you've provided. Just make a general guideline then just acually program to solve the kinks. Don't fully go in depth because you WILL NOT be able to accuracy preict problems and their solutions. code and design at same time after a short GENERAL overview of the general achitecture .

# YOLO

Stop and just do it!

# Create it so you must define whether the system read, writes, or read and
